## Background
For the longest time, I was using [understrap](https://understrap.com/) to create a new website for my clients. It uses Bootstrap and Gulp, and that is all fine and good, it did serve me well for couple websites, but I felt that there was a better way to go about this. 

I prefer webpack to Gulp, and while I was researching, I saw that there were two nice alternatives to Bootstrap, they were MaterializeCSS and Bulma. I started to think that it could be great to have a starter theme for some of these new tools. 

Bootstrap is great, but it still has issues. Bulma seems to do better with the columns. There were a lot of times that clients provided design where a row would have 3 columns when there are 3 items, but becomes 4 columns when there are 4. In Bootstrap, more manual effort is needed for situations like these compared to Bulma.

## Features
* It integrates my favorite technologies together. Wordpress + Sass + Webpack + ES6. 
* It's easy to set up. It literally takes less than 5 minutes. Just import the themes and run two commands to get going. 
* I'm planning to integrate with a template engine for this template, as an option. That is because the I'm also a Laravel developer and I can see that Wordpress loops can get really ugly and time consuming to write / manage. 