---
layout: post
title:  "Showing correct line number on javascript selenium test stacktrace"
date:   2019-08-16 22:33:28 -0400
categories: javascript
comments: true
---

When you are dealing with javascript testing frameworks with selenium, when your test fails, you receive useless stack traces.

For example, check out these posts:

[link1](https://stackoverflow.com/questions/55435669/get-a-meaningful-stack-trace-with-mocha-and-selenium-webdriver-js)

[link2](https://stackoverflow.com/questions/33791684/not-very-helpful-callstack-when-running-a-mocha-test-using-selenium-webdriverjs)


This is difficult to debug as it doesn't show which exact line number caused the test to fail. 

It gets even more confusing if the tests are flaky -- as in it fails occasionally.

One way to debug that I've found out was to use *monkeypatch*.

The methods you are using gets monkey patched so stack trace is saved **before calling the function** like this:

```
let stack = [];

let oldFindElement = driver.findElement;
driver.findElement = function() {
  let stackError = new Error();
  
  stack.push(stackError);

  try {
    return oldFindElement.apply(page.X, arguments);
  } catch (e) {
    console.log(stack[stack.length - 1]); // you can see the current stack trace here
    throw e;
  }
};
```

Of course, you can loop through the functions to monkey patch for most of the driver's functions.

I've found this to be very useful for debugging as we can now tell the exact line of failure.



{% if page.comments %}
<div id="disqus_thread"></div>
<script>
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://se468-github-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{% endif %}
