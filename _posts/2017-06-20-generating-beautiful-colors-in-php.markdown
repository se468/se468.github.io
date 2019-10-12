---
layout: post
title: "GENERATING BEAUTIFUL (USABLE) RANDOM COLORS IN PHP"
date: 2017-06-20
categories: php
comments: true
---

When developing applications, I've had numerous situations when I had to generate random colors to use. 

This time, I wanted to assign random colors to users. My first attempt in PHP was just randomizing colors in RGB, like any of these solutions in Stackoverflow:

`$color = dechex(rand(0x000000, 0xFFFFFF));`

These solutions are very elegant, and they are very efficient probably, but the end result is, it generates colors that are too dark to be used with dark texts, or quite simply, just look ugly (makes your app look like application from 90s).

I was searching for solution on the internet, and found out that the HSV color model is the way to go. By adjusting the hue (H) value, you can get rid of very dark solid colors.

And then I found this library, which generates truly attractive looking random colors.

The option I've used was `RandomColor::many(27, array('luminosity'=>'light')); ` and the generated colors looked great.