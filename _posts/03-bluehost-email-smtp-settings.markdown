---
layout: post
title: "LARAVEL BLUEHOST SMTP EMAIL SEND SETTINGS - TESTED ON LARAVEL 5.4"
date: 2017-06-07
categories: laravel
comments: true
---

I've been looking for ways to send emails via Bluehost SMTP server. I have a pro plan with Bluehost, and for some reason, it was keep giving out an error. The error was Connection could be not established error.

Similar to `Swift_TransportException in StreamBuffer.php line 269: Connection could not be established with host XXXXXX.com [Connection timed out #110]`

The reason was that `MAIL_ENCRYPTION` setting was on `tls`. The trick was to leave `MAIL_ENCRYPTION` field blank.

```
MAIL_DRIVER=smtp 
MAIL_HOST=YOUR-DOMAIN (in my case: mail.seyongcho.com)
MAIL_PORT=26
MAIL_USERNAME=YOUR-EMAIL-ADDRESS
MAIL_PASSWORD=YOUR-EMAIL-PASSWORD
MAIL_ENCRYPTION=
```