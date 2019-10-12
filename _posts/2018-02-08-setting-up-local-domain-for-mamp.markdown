---
layout: post
title: "Setting up Local Domain in MAMP (like yoursite.dev)"
date: 2018-02-08
categories: laravel
comments: true
---

## Why?
* My favorite way to set up PHP server, Laravel valet doesn't run apache
* You might need to set up an existing project with a giant .htaccess file that you don't wanna spend time going through. You need to set up an apache server quickly to read .htaccess file.
* It's just easier to develop then doing the subfolder thing. Some projects are already developed with assumption it will be hosted on it's own domain (using URLs respective to the root directory).

> In this tutorial I will assume that you use sublime text. Feel free to change `subl` in the commands to whatever you use mainly, e.g. `atom`.
> In this tutorial I will assume that the domain you are trying to create is yourdomain.domain
> It seems scary at first, but it's only 4 steps, and once you do it, it will take less than a minute to do this next time.

## Step 1: Change apache setting 
Go to: MAMP -> Preferences -> Ports -> Apache Port 

Change this to `80`.

## Step 2: Go to Terminal, type `subl /etc/hosts`
At the top of this file, it will say: `127.0.0.1  localhost`. Change to 
`127.0.0.1  localhost yourdomain.domain`.

> ** Important ** : At first when I tried it, I wrote 127.0.0.1 yourdomain.domain in another line. It didn't work and I spent long time trying to figure out why. Make sure `yourdomain.domain` is beside localhost with a space in between!

```
# What I did and failed (Don't do this!): 
127.0.0.1 localhost 
127.0.0.1 yourdomain.domain
```

## Step 3: In terminal, type `subl /Applications/MAMP/conf/apache/httpd.conf`
Uncomment where it says `# Virtual Host`, it should be around line 584.

```
# Virtual hosts
Include /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf
```

## Step 4: In terminal, type `subl /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf`.

Remove everything. 

Copy this code and paste it in:
```
NameVirtualHost *:80

<VirtualHost *:80>
    DocumentRoot /Applications/MAMP/htdocs
    ServerName localhost
</VirtualHost>


<VirtualHost *:80>
    DocumentRoot "/Applications/MAMP/htdocs/firstevent"
    ServerName yourdomain.domain
</VirtualHost>
```

And then restart your MAMP (`Stop Servers` then `Start Servers`).

## Check if it's working by going to your browser and going to yourdomain.domain
If you've set up everything correctly, the site should now show up. 
If not, then add `index.html` or `index.php` in that domain, write something in the file, and and rename `.htaccess` to something else, and see if that shows up. 
