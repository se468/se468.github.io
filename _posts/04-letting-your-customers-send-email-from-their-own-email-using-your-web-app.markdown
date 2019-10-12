---
layout: post
title: "LETTING YOUR CUSTOMERS SEND EMAIL FROM THEIR OWN EMAIL ADDRESS USING YOUR WEB APP"
date: 2017-06-08
categories: emails
comments: true
---

For a project, I had to find a way to send emails on behalf of my customers. Just setting the mail "from" in PHP didn't cut it. A lot of the email services don't let you send email unless you verify them. 
  
For example, Amazon SES would just tell you that it is unauthorized email address and not let you send. 
 
I had to switch over to other emailing service. After looking at numerous services (Mailgun, SES, SendGrid), I've come across a service that let's you authenticate your customer's email address via their API: PostMark
 
Note that it doesn't allow emails from free email providers such as Gmail or Hotmail ... etc. Your customers will need to provide a real company email, or an email address with their own domain name.
 
 
What would happen is: 
 
1. Setting up Postmark with your language / framework of choice
1. Your customer would verify their email address from your web app via Postmark API. 
 
 
For example, in PHP: 
```
$adminClient = new PostmarkAdminClient(env('POSTMARK_API_TOKEN'));
$signature = $adminClient->createSenderSignature($email,  $name);
```
 
which then sends email to your customer if sender creation was successful, error message otherwise.
 
 
1. Postmark then sends an email to confirm sender signature, customer would click the button on the email, similar to below:
 
1. When the user confirms the sender signature via their email, you are set to send email on their behalf. Simply send the emails via SMTP! 