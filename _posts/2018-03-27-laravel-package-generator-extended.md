---
layout: post
title: "Introduction: Laravel Package Generator Extended!"
date: 2018-03-27
categories: laravel
comments: true
---

Generating Laravel package is fun and exciting task. However, there are a lot of manual works involved in it still. We want to be able to use the artisan commands to generate all the necessary files on the fly just like how we develop our regular Laravel application. 

That's why I've created [**Laravel Package Generator Extended**](https://github.com/se468/laravel-package-generators-extended), which provides set of commands that you can use handy for your package developments.

This package generator comes with 5 main generators: 
```
php artisan package:create

php artisan package:command

php artisan package:controller

php artisan package:migration

php artisan package:model
```

which will create the package and files in the right place that you set up in the config file, or you specify where you want it to go. You can develop the package while developing your application, and see how it works together!

I'm always looking for contributors and ideas, so check it out!

