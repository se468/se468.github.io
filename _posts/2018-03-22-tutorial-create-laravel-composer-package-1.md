---
layout: post
title: "[Tutorial] Part 1 : Create a Laravel package - The Basic setup"
date: 2018-03-22
categories: laravel
comments: true
---

Link to [full package boilerplate](https://github.com/se468/laravel-package-boilerplate)

## Basic Setup
Start new Laravel project or open an existing Laravel project and create folder `packages/<your-github-id>/<your-package-name>` in the Laravel project.
And then, inside the directory: 

* Create `src` folder. This is where you will store all your package source code (routes, migrations, views, etc).
* create `README.md`
* Go into terminal in the directory and type `composer init`. Set up the project name, description, etc. It should create `composer.json` file for you.
* Create your packages's service provider class.

You can decide what namespace you will use, I used se468 (my github ID) and LocalEmail (The package name).

For example, if I have `LocalEmailServiceProvider.php` in the package directory, that looks like this:

```
<?php
namespace se468\LocalEmail;

use Illuminate\Support\ServiceProvider;
use Artisan;


class LocalEmailServiceProvider extends ServiceProvider
{
    public function boot()
    {
    }

    public function register()
    {
    }
}
```


Now your packages directory should look something like this:
```
- src 
- README.md
- composer.json
- <YOURSERVICEPROVIDER>.php

```

## In `composer.json` in your Laravel project, add the following path namespace:

``` 
"Path\\PackageNamespace\\" : "packages/<your-github-id>/<your-package-name>/src"
```

in `autoload.psr-4` so it looks like this. 

```
"autoload": {
    "classmap": [
        "database/seeds",
        "database/factories"
    ],
    "psr-4": {
        "App\\": "app/",
        "Path\\PackageNamespace\\" : "packages/<your-github-id>/<your-package-name>/src"
    }
},
```

In my case, it was `"se468\\LocalEmail\\" : "packages/se468/laravel-local-email/src"`.

## In `config/app.php`, add your namespace in the list of providers.
```
<your-github-id>\PackageNamespace\PackageServiceProvider::class,
```

## Now, let's see if package is loading:
* You can add dd in the boot method of your service provider to see if your package is correctly loading, like this: 

```
<?php
namespace se468\LocalEmail;

use Illuminate\Support\ServiceProvider;
use Artisan;


class LocalEmailServiceProvider extends ServiceProvider
{
    public function boot()
    {
        dd("Package is loading!");
    }

    public function register()
    {
    }
}
```

If you see "Package is loading!" when you go into your Laravel homepage, you've set up your first Laravel package!

In the next series, we will go into more details about the package development, such as routing, Controllers, Models, Migrations, and setting up webpack with Javascript and CSS compilation.
