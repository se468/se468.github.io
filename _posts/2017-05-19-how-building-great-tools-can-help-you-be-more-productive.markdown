---
layout: post
title: "HOW BUILDING GREAT TOOLS CAN HELP YOU BE MORE PRODUCTIVE"
date: 2017-05-19
categories: tooling
comments: true
---

When I was working at software development agencies and when I was building high school math test app, I've noticed the tremendous amount of content management and data entry that had to be done to projects that are content based. Often, for hours and hours, you see people doing data entry. 
 
For high school math test, we had to create over 1500 questions and chapter overviews for every single chapter for 5 different courses. That was a lot of content to push in to database! We had to not only type in the questions, but had to create figures / shapes / graphs and add the math equations in the form of latex code.
 
How did we (team of two) manage to do that? The answers were:
Finding the right tools to do these jobs more effectively
If there are no good tools for the job, create one
 
## FINDING THE RIGHT TOOLS
For writing mathematical equations for display in app, latex was used. For inputting latex, this tool called MyScript Math that really simplifies most of the process. Until you can get used to all the latex commends, you can just draw out the equation on the page with your mouse, and it will generate Latex for you! How easy is that! It even supports developer API, so you can implement to your own CMS.
 
With that, I’ve used Mathjax and Katex (from Khan Academy) to render the Latex on a web view. They are both javascript libraries that can render Latex on web. Katex is lighter and faster, but it doesn’t support as many symbols as Mathjax as of yet, so I’ve used Mathjax for equation heavy and symbols heavy latex, and Katex for the ones that were short and simple.


 
## CREATING THE EXTRA TOOLS WE NEED
Shapes & Figures
The tool we needed next was a mechanism to create figures and graphs effectively. Math questions consists of many many different kinds of figures. It can take so many different shapes and sizes. My first attempt was to draw everything on Photoshop, which was not effective. Just trying to draw the equations and making all these shapes that look consistent was a big challenge, and it was time consuming. Also, if we decide to change a global color or styling of these shapes, everything would need to change. 
 
 
There was a need to store the informations about shapes and figures with data, instead of an image file. So, I’ve created a plugin called a geometry shape editor.
 
 
You can create all these different shapes and symbols (such as angles signs) and save them, it will store that symbol on DB and generate images and shortcodes to display on your website.