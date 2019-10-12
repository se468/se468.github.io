Link to [full package boilerplate](https://github.com/se468/laravel-package-boilerplate)

Last tutorial, we went over creating migrations, model and controllers, and also routes and views for laravel package development. We'll go over how to set up webpack and compile scss and js to use in the views for our packages.

## Directory structure
You should now have something like this kind of directory structure in your Laravel project.

```
... all the other files for Laravel
packages
|- <your-github-id>
  |-- <your-package-name>
    |--README.md
    |--composer.json
    |--<YOURSERVICEPROVIDER>.php
    |--src
      |-- routes
        |-- web.php
      |-- Http
        |-- Controllers
          |-- YourPackageController.php
        |-- YourPackageModel.php
    
```


In your src directory, create a folder called `resources` and inside that, add directories and files like this (same as Laravel's organization of resources):
```
resources
  |-- assets
    |-- js
      |-- app.js <-- Entry point for your javascript 
    |-- css
      |-- app.css <-- Entry point for your css
  |-- views
      |-- index.blade.php <-- your views
```


## Loading Views
In your service provider, add a line (Replace YourPackageName to your own package name): 
```
$this->loadViewsFrom(__DIR__."/resources/views", "YourPackageName");
```

You can now use `YourPackageName` prefix to call the views from your package. 

In the Controller's index method, let's load the `index.blade.php` like this: 
```
public function index () {
    return view("YourPackageName::index");
}
```


## Setting up Webpack

Create a package.json in your package root, here's a starting point:

```
{
  "private": true,
  "scripts": {
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch-poll": "npm run watch -- --watch-poll",
    "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
  },
  "devDependencies": {
    "axios": "^0.18",
    "browser-sync": "^2.23.6",
    "browser-sync-webpack-plugin": "^2.0.1",
    "cross-env": "^5.1",
    "laravel-mix": "^2.0",
    "lodash": "^4.17.4",
    "popper.js": "^1.12",
    "vue": "^2.5.7"
  }
}
```

run `npm install` to install the packages. 

Create `webpack.mix.js` in your package root as well: 

```
let mix = require('laravel-mix');

mix.js('src/resources/assets/js/app.js', 'src/public/js')
   .sass('src/resources/assets/sass/app.scss', 'src/public/css');
```

Try running `npm run dev`. Does it work? If not, install webpack (`npm install webpack --save-dev`) and try again. 

Now your css and javascript should be compiled to your package's public directory. 

If you see the css and javascript files, congratulations!

## Javascript and CSS, and webpack

You need to publish your assets to laravel's public directory before you can load the Javascript and CSS into your views. 

In your console, do `php artisan vendor:publish --tag=public --force` and it should publish all the compiled css and javascript files in your Laravel's `public/vendor/<github-id>/<package-name>` folder. 

In order to access the files, you can access it simply by calling it:
```
<script type="text/javascript" src="public/vendor/<github-id>/<package-name>/js/app.js"></script>

<link rel="stylesheet" href="public/vendor/<github-id>/<package-name>/css/app.css">
```

You could create a helper function to get the path more easily like this: 

```
<?php
function package_asset($path) 
{   
    return asset('vendor/<your-github-id>/<package-name>'.'/'.$path);
}
```

and do 
```
<script type="text/javascript" src="{{ package_asset('js/app.js') }}"></script>

-- and --

<link rel="stylesheet" href="{{ package_asset('css/app.css') }}">
```


## Creating Vue Components
Now it should be easily to use Vue in your app. I prefer to load Vue and Bootstrap via CDN during package development. Let's add the dependencies in your index view. Add this before you add `app.js` and `app.css`.

```
<!-- Bootstrap -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

<!-- Axios -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>

<!-- Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```


You can create a folder `components` in your `src/resources/assets/js` folder and add `YourPackageComponent.vue`. 

Let's try loading it in your app.
Add this in your `app.js`.

```
Vue.component(
    'your-package-component',
    require('./components/YourPackageComponent.vue')
);


const app = new Vue({
    el: '#app'
});
```

Now in your `index.blade.php`, you can add the component simply by:

```
<div id="app">
    <your-package-component></your-package-component>   
</div>
```

## Quick tip to make your development faster
In order to avoid typing `php artisan vendor:publish --tag=public --force` every time you make changes to javascript and scss, you could simply add this in the controller before the view is loaded: 
```
Artisan::call('vendor:publish', [
    '--tag' => 'public', 
    '--force' => 1
]);
```

If you refresh the page, it will run the command and you don't need to go back to terminal to publish your assets while developing. Make sure you comment this out for production though!


