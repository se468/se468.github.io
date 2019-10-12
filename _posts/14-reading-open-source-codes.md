Open source projects give you a great chance to learn from other people's code, and you can see the code written by people a lot more experienced and skilled than you. There is always someone better than you out there. Most importantly,as an independent freelance developer or if you are working in a small company, you can get stuck working with codes that aren't written by experienced developers. 

> Open source projects gives you a chance to learn from others and give/get feedback to big projects that are used by millions.

I've been reading [Stripe-PHP](https://github.com/stripe/stripe-php) sourcecode to study and learn how they've structured the wrapper around their REST API. I've integrated this source code for different projects that I've worked, but never actually got around looking into how it actually worked or how they structured their code.

I want to build something similar for other vendors in Korea, such as Kakaopay and Naverpay. I was surprised to find that they don't have wrappers around the languages for their REST API, after all, they are such big companies. I am going to put it on Github so that people can use freely, I think it could be extremely useful for people when they are building businesses in Korea, as they provide the REST APIs but not the specific language APIs other than Javascript. 

Often times though, businesses need more control over how they'll handle the payment process, hence they need to deal with the payments on server side. 

Looking into how Stripe structured their code and organized their tests will give me a head start as opposed to starting on my own from scratch. This is a huge benefit to looking into open source projects. You aren't necessarily trying to copy their code and styles, but you can **check** before you develop if there are anything good to learn that can be **beneficial to your own project**.

> Before developing something on your own, read open source code that accomplish similar thing to that you are building so you can gain a better understanding of the processes they've went through and figured out.