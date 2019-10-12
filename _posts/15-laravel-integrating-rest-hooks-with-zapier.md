# Integrating Rest Hooks in Laravel Passport that works with Zapier CLI that authenticates with OAuth 2
Building REST Hooks in Laravel is one challenge, making it work well with Zapier is another.
As a developer who uses PHP/Laravel for pretty much all the projects nowadays, I found Zapier CLI a little hard to set up in the beginning.
It can be quite overwhelming to integrate all of this if you don't know where to start.

In this blogpost, I will guide through the complete process assuming you have a Laravel application with Passport installed, and you don't know anything about Zapier.

I will try to explain as easy as I can. In the end, you might see why this was worth it, Zapier lets you connect with so many different APIs without you having to integrate all of it one by one.

## How it works
1. We will go over what endpoints you need to have in your Laravel applications first
1. And then we will build the Zapier app using the web builder, which is easier to work with. We will then make sure every functionality works as expected.
1. We will convert the web builder app to Zapier CLI and perform the necessary changes. There is a web builder to CLI conversion tool, but it doesn't convert everything including webhook triggers.


## Building Rest Hook endpoints on Laravel
On Laravel, you need the following endpoints set up:
- Authorization URL: `/oauth/authorize`- Passport already sets this up for you. You just need to provide it in Zapier settings.
- Access Token URL / Refresh Token URL: `/oauth/token`  - Passport already sets this up for you. You just need to provide it in Zapier settings.
- Test Endpoint: `/me` - Which Zapier will use to verify the authentication and get the user's info.
- Webhook Subscribe URL: `/api/hooks` - For registering webhooks (when a Zap is turned on).
- Webhook Unsubscribe URL: `/api/hooks/{id}` - For unsubscribing webhooks (when a Zap is turned off).
- Polling URL for your trigger: `/api/polling/trigger` - Before webhooks are configured, Zapier uses this to get the sample data for the trigger.

### Create Test Trigger endpoint for Zapier (`/me`)
In `api.php`, create the `/me` endpoint that returns the user's basic info you'd like to show in Zapier. For example:
```php
Route::get('/me', function () {
    return response()->json([
        'id' => auth()->user()->id,
        'name' => auth()->user()->name,
        'email' => auth()->user()->email
    ]);
})->middleware(['auth:api']);
```

### Create Webhooks
#### Creating Webhook Model
Run `php artisan make:model Webhook -m` and create the webhook model.

Edit the migration file like this (taken from [Captain Hook](https://github.com/mpociot/captainhook), which I wanted to use, but didn't work on Laravel 5.6) 
```php
Schema::create('webhooks', function (Blueprint $table) {
    $table->increments('id');
    $table->integer('tenant_id')->unsigned()->nullable();
    $table->string('url');
    $table->string('event');
    $table->timestamps();
});
```

For Webhook Model, it should look something like this: 

```php
class Webhook extends Model
{
    protected $table = 'webhooks';
    public $fillable = ['id', 'url', 'event', 'tenant_id'];

    public function fire($data)
    {
        $client = new Client();

        $response = "";

        try {
            $response = $client->request('POST', $this->url, [
                'json' => $data
            ]);
        } catch (Exception $e) {
            Log::info($e->getMessage());
        }
        return $response;
    }
}
```
#### Creating Routes
In `api.php`, let's set up the webhook routes:

```php
Route::group(['middleware' => ['auth:api']], function () {
    Route::post('hooks', 'RestHooksController@subscribe'); //POST /api/hooks - subscribe
    Route::delete('hooks/{id}', 'RestHooksController@delete'); //DELETE /api/hooks/:id - delete
    Route::get('polling/trigger', 'API\RestHooksController@pollForTrigger');
});
```
#### Creating Controller
Let's create the controller RestHooksController. `php artisan make:controller RestHooksController`.

Keeping it simple, it will look something like:
```php
class RestHooksController extends Controller
{
    public function subscribe(Request $request) {
        $input = $request->all();
        
        $webhook = Webhook::create([
            "tenant_id" => auth()->user()->id,
            "url" => $input["target_url"],
            "event" => $input["event"]
        ]);

        return $webhook;
    }

    public function delete($id) {
        $webhook = Webhook::find($id);
        $webhook->delete();

        return response()->json([
            "success" => "success"
        ]);
    }

    public function pollForTrigger () {
        return response()->json([
            "name" => "Sample Name"
        ]);
    }
}
```

* On `subscribe` method, we need to create a new `Webhook` object and store it in database.
* On `delete` method, we need to find the webhook and remove it from database.
* On `pollForTrigger` method, we need to give sample data for Zapier to use to make it more user friendly for the end users.
#### Now you are done for Laravel side
Check if the endpoints are functioning properly with something like Postman if you'd like. Deploy your app for next step.


## Building Zapier Web Builder App
We will now want to test if our Laravel side is all good and set up using Zapier.

Go to https://zapier.com/developer/builder and create a new legacy web builder app. 

### Authentication
Generate an access token in your Laravel's API screen and name it `Zapier-Web`.

Click get started button on Authentication. Select OAuth 2, with refresh token, and you will see the authentication is set up with access token.
[IMAGE]

Go to Authentication Settings. [IMAGE]
Fill in the Client ID, Client Secret, Authorization URL(`/oauth/authorize`), Access Token URL(`/oauth/token`), and Refresh Token URL(`/oauth/token`) and hit Save.


### Setting up Triggers
Click Add your first trigger, go through the set up process. 
In "3. Where Data Comes From",
- Select REST Hooks for Data source
- Enter the polling url (`/api/polling/trigger`).

After that, click "Manage Trigger Settings" in Zapier app dashboard, and fill in the following:
- REST Hook Subscribe URL (`/api/hooks`)
- REST Hook Unsubscribe URL (`/api/hooks`)


### Setting up a test trigger
You will also need to have an invisible test trigger set up for Zapier, using `/me` endpoint. This is used to grab the user's information such as the name and email.

In Step 1: 
Select "Select if this trigger should be completely hidden from endusers."

In Step 3:
- Select Polling for Data Source
- Enter the polling url (`/me`)

Now you are ready to test it by going to https://zapier.com/ and clicking "Make a Zap!" button.

Select your app and try to create a trigger, and send a mail to yourself. If the zap is on and everything works, then congratulations! You are now ready to integrate the CLI!


## Converting the Web Builder App to CLI
Set up your Zapier app by following the guide here: https://zapier.com/developer/documentation/v2/converting-your-web-builder-app-to-cli/

```
npm i -g zapier-platform-cli
zapier login
zapier convert 1234 your-new-cli-app-dir
cd your-new-cli-app-dir
npm install
zapier validate
zapier push
zapier env 1.0.0 VARIABLE_NAME foo //Setup the env variables
```

Make sure you change all your environment variables both on `.env` (used for local environment testing) and by using `zapier env 1.0.0` (used for zapier app).

You should have a CLI app project that you can build upon. The triggers that you've set up are not converted, we will need to convert it and add the tests for it.

### Modifying converted zapier code to use the env variables instead of hard coded values
If you prefer hardcoding the values, that's fine with me, but I think the better approach is using the environment variables across your code so that you can change it easily.

Go over the zapier generated code and change the base url to use `process.env.BASE_URL` for example.

### Modifying the code for REST hooks triggers
Open the zapier project and in `/triggers` you should see the triggers that has been converted. This file isn't yet converted to a real REST hook integration, but the conversion was done via polling URL. The Zapier doc states that "Hooks are not supported by the converter (yet). Those will be converted to polling triggers."

We need to do the conversion ourselves. Thankfully there is an example implementation on [Github](https://github.com/zapier/zapier-platform-example-app-rest-hooks). 

Check out the `/triggers/recipe.js` ([link](https://github.com/zapier/zapier-platform-example-app-rest-hooks/blob/master/triggers/recipe.js)). Copy that file and replace your trigger javascript file with that. 

For replacing: 
- Replace the urls from mockapi.io into your own webhook url.
- Change all occurences of 'Recipe' to your trigger name.
- Change the `module.exports` properties with your trigger's information, such as noun, display label... so on.

One that is done, run `zapier validate` and `zapier push`.

Test your application by creating a Zap on Zapier website. If everything went well, the functionality should be identical.

### Creating the test for REST hooks
Check out how Zapier example app tests the recipe.js [link](https://github.com/zapier/zapier-platform-example-app-rest-hooks/blob/master/test/triggers.js).

Let's copy this over to your trigger test file `/tests/triggers`.

Copy it and replace your file with this, and let's try to do `zapier test`. 

You will still notice that the test fails on the second test. That is because you need to get the access token and include it in the bundle before the request. 

```
const bundle = {
    authData: {
        access_token: process.env.ACCESS_TOKEN
    }
};
```

Add the access token to env and now the tests should pass.

> I was quite stuck on this, I wasn't really sure how to get the access tokens since using `z.console.log` hides the access tokens and the access tokens are encrypted in Laravel's DB. I found the easiest way to get this access token is simply by logging it on webhook subscribe method (let me know in the comments if there is a better way). Add this in your Laravel's webhook subscription method temporarily `Log::info($request->headers->all());` and you can see what's passed in the Bearer.

Now, finally let's test everything by doing `zapier push` and creating a new Zap.

If everything worked out, you will have a Zapier app that works with your application using REST Hooks and OAuth 2! Congratulations!