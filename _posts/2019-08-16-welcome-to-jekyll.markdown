---
layout: post
title:  "Showing correct line number on javascript selenium test stacktrace."
date:   2019-08-16 22:33:28 -0400
categories: javascript
---

When you are dealing with javascript testing frameworks with selenium, when your test fails, you receive useless stack traces.

For example, check out these posts:

[https://stackoverflow.com/questions/55435669/get-a-meaningful-stack-trace-with-mocha-and-selenium-webdriver-js]
[https://stackoverflow.com/questions/33791684/not-very-helpful-callstack-when-running-a-mocha-test-using-selenium-webdriverjs]


This is difficult to debug as it doesn't show which exact line number caused the test to fail. 

It gets even more confusing if the tests are flaky -- as in it fails occasionally.

One way to debug that I've found out was to use monkeypatch.

The methods you are using gets monkey patched so stack trace is saved "before" calling the function like this:

```
let stack = [];

let oldFindElement = driver.findElement;
driver.findElement = function() {
  let stackError = new Error();
  
  stack.push(stackError);

  try {
    return oldFindElement.apply(page.X, arguments);
  } catch (e) {
    throw e;

    // you can console.log(stack[stack.length - 1]) to see the current stack trace here
  }
};
```

Of course, you can loop through the functions to monkey patch for most of the driver's functions.

I've found this to be very useful for debugging as we can now tell the exact line of failure.

