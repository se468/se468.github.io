---
layout: post
title:  "Tools we've used for Ashore - Productivity tools that boosted our efficiency"
date:   2017-05-19
categories: tooling
comments: true
---


When building Ashore, we’ve made use of so many different apps to streamline the process. Ultimately, these apps makes life easier and makes a big difference. In this post, I’d like to introduce some of the tools I've used, and will probably continue to use for my workflow.


## Design (Brandcave) : Sketch / Zeplin

The design was done in Sketch, which provides slick and simple interfaces to create modern designs. It basically replaces a lot of needs for Photoshop and Illustrator, and I got the feeling that they focused on the core functionalities related to app design rather than putting all the photo editing functionalities together. Therefore, the app is faster, consumes less disk space, and the interface is cleaner to use. 
 
With the design created from Sketch, Zeplin provides an excellent way of communication between the designer and developer. It integrates with Sketch and helps the developer by showing a lot of the css values (margin & paddings & fontsizes ... etc) and gets rid of most of the tedious tasks.


## Communication: Slack / Google Drive
Communication tools for teams, Slack, provides slick native app for mac which really cuts all the distractions you'd normally get from emailing back and forth. Using Slack, surprisingly, really boosted my productivity. 

Google Drive was used to create documents and to-do list.


## Version Control: Sourcetree and Bitbucket
Bitbucket is an excellent tool, and using it together with Source tree for native mac,  the version control was fully taken care of. Laravel Forge also provides excellent support for Bitbucket, allowing me to deploy the apps with ease by pushing to the repository.


## Frontend: VueJS / Sass / Laravel Mix (Webpack)
We've used the Vue and Sass approach, with Laravel's beautiful Laravel mix. For me this workflow was perfect and really streamlined our workflow compared to using vanilla Javascript. 

Vue pretty much changed my life on Frontend development. It's component base system really groups the like functionalities together and makes the whole thing easy to manage and build.

## Backend: Laravel/ MySQL
Laravel was used for the backend, and it is the most popular PHP framework available nowadays. Using Laravel makes developing large scale applications not as complicated, and literally takes care of a lot of the things that developers used to program from scratch. I also find the code very elegantly written and easy to work with. I’d highly recommend this framework if anyone is writing a full scale web app in PHP.


## Dev-ops : AWS EC2, SES, AND S3 AND FORGE
Ashore is hosted on AWS, EC2 server
We’ve simplified much of Dev-ops process using Laravel Forge. 
AWS SES is used for emails and S3 for storage
Automatic deploy from bitbucket repository
AWS is also supported out of the box with Laravel Forge


## Debugging & Maintenance: Sentry.io and Papertrails
This one is one of my favourite. Sentry.io handles the error reporting. Whenever a user experiences an error or an exception, it would send me an email directly with detailed info about where in the source code that error happened. 

Papertrails handles the logging so I don’t have to download the log file from the server. Which saves a lot of time.


## Other tools I'd recommend
* Sublime Text (code editor)
* Sequel Pro