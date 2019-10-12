## Background
Tunnyl is one of the bigger projects I've worked on. I've been involved in building the backend as well as the frontend and designing the architecture of the whole system. Ultimately, the system works like any other skill trading platforms like Upwork, but with a kick. It is a system where you can find someone to do a task for you, and you can pay them with cash or by doing something for them with your own skills, or lending something that you have.


## Challenges
The reason this was an interesting project was that it has complex task management system where some of the features were not so simple to build right from the beginning. 

* Task creation with different types of compensations. Cash (USD and HKD) and favor (Skill or a thing that the user has) is supported
* User matching for the task (User application and selection process)
* Payments between users (we used Stripe connect for this one)
* Invoice generation
* Real time chat / notifications

## Frontend Development
Most of the front end was done with VueJS and Sass. We've named our sass trying to follow Smacss. In terms of the code, the front end turned out pretty neat and clean. 

## Backend Development
As for the backend, we used Laravel, and tried to stay within the Laravel ecosystem. The mantra was to Keep It Simple Stupid. 

Some of the systems we've integrated includes: 
* Laravel Socialite (Facebook login and verify with Facebook function)
* Laravel Echo (with Pusher)
* Stripe Connect
