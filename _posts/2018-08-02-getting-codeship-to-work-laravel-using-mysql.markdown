---
layout: post
title: "GETTING CODESHIP TO WORK WITH LARAVEL 5.5 (USING MYSQL)"
date: 2018-08-02
categories: laravel
comments: true
---

Today, I've been struggling with Codeship, because all the tests were passing on my computer.

Codeship don't have good documentations about Laravel / PHP setup, and their documentation seems to only cover Ruby and Django, which made it a little more confusing. 

Let's get straight to the point. Here are the setup commands I've used for my app:
```
phpenv local 7.1
# install dependencies
composer install --prefer-dist --no-interaction
# set up laravel
php artisan migrate
php artisan db:seed
php artisan cache:clear
php artisan optimize --force
```
and to run Test Commands:

`vendor/bin/phpunit`
And env on their project settings for MySQL:

```
DB_CONNECTION=mysql
DB_DATABASE=test
DB_HOST=localhost
DB_USERNAME=$MYSQL_USER
DB_PASSWORD=$MYSQL_PASSWORD
```


Here's the important part: 

For Codeship, strangely, you need to run `migrate:fresh` instead of just `migrate` on the `TestCase.php`. This was driving me crazy and was difficult to figure out what was going on, until I've started figuring out the db additions are being carried over to the next test.

My `TestCase.php` `prepareForTests()` function looks like this now, and it works!

```php
private function prepareForTests()
{
    Artisan::call('migrate:fresh');

    Artisan::call('db:seed');

    $this->user = User::first();
}
```
