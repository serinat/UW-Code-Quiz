# UW-Code-Quiz

- As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment. These assessments are typically a combination of multiple-choice questions and interactive challenges. In this homework assignment, your challenge is to build a code quiz with multiple-choice questions.

## Instructions/Demo

From scratch, build a timer-based quiz application that stores high scores client-side. Following the common templates for user stories, we can frame this challenge as follows:
As a coding bootcamp student
I want to take a timed quiz on JavaScript fundamentals that stores high scores
so that I can gauge my progress compared to my peers

How do you deliver this? Here are some guidelines:

Play proceeds as follows:

The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.

Your application should also be responsive, ensuring that it adapts to multiple screen sizes.

![demo](demo/04-Web-APIs_02-Homework_Assets_04-Web-APIs-homework-demo.gif)

- The objective of homework 4 is to generate a pop quiz about your topic of choice. I chose to do one about myself, thought it would be fun to see how well my family & friends know me! The last few days I spent the majority of the time building my HTML page using bootstrap and font-awesome (my icon wouldn't work so I spent about an hour on it until I finally realized I was referencing a different version of fontawesome - ugh live and learn). From bootstrap I used card and form layout to simplify, organize and display my questions, results and score sections. Per usual I found the bootstrap CDN to be very useful and user-friendly. I also messed around a bit with CSS to increase the opacity of my background image, to float header elements, and to center most of the document. I've started pseudocoding the functionality of the quiz, I should be able to finish by tomorrow! Stay tuned..

- Is it almost midnight yet?? This was probably the most challenging JS code I've had to generate. Even with the help of tutors, classmates, family friends, etc., I spent hours on end trying to get the functionality to work. Most of it is working, not sure I have the time (nor energy) to add in the time element. At some point I do want to incorporate as I can see it being useful in many applications. Challenges were many including timer, code placement and clearing alerts after refreshing. I was also trying to figure out how to highlight the correct answer if the user chose the wrong answer. I plan on tackling these aspects after a break!

- UPDATE: Timer implemented, however, at some point its countdown is funky which looks pretty typical across the board.



## Resources

- https://getbootstrap.com/docs/4.3/getting-started/introduction/
- https://www.w3schools.com/
- https://fontawesome.com/
