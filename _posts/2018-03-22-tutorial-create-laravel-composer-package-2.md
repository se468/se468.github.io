---
layout: post
title: "[Tutorial] Part 2: Create a Laravel package - Migrations, Controllers, Routes, Views"
date: 2018-03-22
categories: laravel
comments: true
---

Link to [full package boilerplate](https://github.com/se468/laravel-package-boilerplate)

If you followed first part of this tutorial, you should have a folder called `packages` in your Laravel installation, and inside that, you should have directory structure like following: 

```
packages
|- <your-github-id>
  |-- <your-package-name>
    |--README.md
    |--composer.json
    |--<YOURSERVICEPROVIDER>.php
    |--src <-- A blank folder

```

In this part of the tutorial, we will take a look at how we can create migrations, models and controllers, and creating routing and views.

## Migrations
In your `src` directory, create a folder named `database`, and create a folder called `migrations` inside it, just like how Laravel migrations are stored. You can put your migrations into this directory.

Add the following to your package ServiceProvider's `boot` method. 
```
$this->loadMigrationsFrom(__DIR__.'/database/migrations');
```

Try running `php artisan migrate` in your laravel project directory and see if the migrations inside this directory is running.

## Models and Controllers
Inside your `src` directory, create folder named `Http`, and inside that, create a folder called `Controllers`. I like to follow the Laravel's directory structure to keep it consistent. 

Namespace your Model like `Path/PackageNamespace/Http`. 

For controllers, similar logic applies. You can create files in `Controllers` directory and namespace it `Path/PackageNamespace/Http/Controllers`.


## Routes and Views
Inside your `src` directory, create a folder called `routes`, and create a file called `web.php` inside it.

In your ServiceProvider's `boot` method, add this line: 
```
$this->loadRoutesFrom(__DIR__."/routes/web.php");
```

You can then call routes within your namespace like this (web.php file): 
```
<?php 
$namespace = "Path\PackageNamespace\Http\Controllers";

Route::group(['namespace' => $namespace, 'prefix' => 'your-package'], function () {
    Route::get('/', 'YourController@index');
});
```

Now, in your Laravel site, try going into that route (/your-package) and check if the controller index method is loaded (`dd("working");`). Do you see the Controller now working? If it did, congrats!



In the next series, we will take a look at how the Javascript/CSS and Laravel mix can be used within your package.
