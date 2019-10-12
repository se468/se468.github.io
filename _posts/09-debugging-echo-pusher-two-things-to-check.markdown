---
layout: post
title: "DEBUGGING LARAVEL ECHO + PUSHER - TWO THINGS TO CHECK IF IT DOESN'T SEEM TO BE GETTING THE EVENTS"
date: 2018-01-24
categories: laravel
comments: true
---

I’ve recently refactored some of the events code for a project, and Laravel echo stopped working. 

I was almost pulling my hair out as I was debugging it because I had no idea where went wrong. I find the echo documentation isn't as straight forward as other parts of Laravel's documentation and it isn't as easy to debug stuff when things go wrong. 

Now I’ve finally debugged it, I wanted to share the solution here. If you are going through the same issue, check these two things: 

1. Check if event implements `ShouldBroadcast` 

2. If your event is inside subfolder inside `App\Events`, check namespace. 
If the fully qualified classname is like (`App\Events\ChatRoom\NewMessageEvent`), and if Echo is set up as default (default namespace is `App\Events` ), then you need to listen to `ChatRoom.NewMessageEvent`, not just `NewMessageEvent` 

```
window.Echo.private('App.ChatRoom.' + self.chatroom.id)
                    .listen('ChatRoom.NewMessageEvent', (e) => {
                        console.log(e);
 
                    }); 
```
