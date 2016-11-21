# memory

This memory was developed during a five day course to learn React.js, and this text is meant to explain the setup of the course so you can repeat it.

## Prerequisites

Prerequisites for this course are a good knowledge in HTML and CSS and basic knowledge in JavaScript, or the following Codecademy courses:

- [Make a Website](https://www.codecademy.com/learn/make-a-website)
- [Learn JavaScript](https://www.codecademy.com/learn/learn-javascript)

## Before the course

Apart from the prerequisites, you also need to do the following to set up the basics of the project. The following is a list of instructions to send to the participants of the course so that everyone can be prepared when it starts.

1. Make sure you have node installed, if not look [here](http://blog.teamtreehouse.com/install-node-js-npm-mac)
2. Open a terminal and navigate to the place where you want to create your app
3. Type `npm install -g create-react-app`
4. Type `create-react-app hello-world` (this will create a project called hello-world, if you want it to be called something else, just replace hello-world with the project name you want instead)
5. Navigate in to the hello-world folder (or whatever you chose to call your project)
6. Type `npm run start`
7. Open a browser and navigate to http://localhost:3000/
8. If everything is working correctly you'll see a spinning react logo and some text – success! :D

## Schedule

If you're a student who just want to create a memory-game of your own, just follow [these instructions](https://docs.google.com/document/d/1RZ5dSVtz3bR2LAFbZVn7URPfftJyYyOYzXEOUc4qKVw/edit#heading=h.bngaz5wuzh92). As a course leader I suggest you send them out to the students (or make your own ones to send out) so that they can work in their own pace if they want.

Here is a summary of what we did each day.

### DAY 1 – Introduction and basic layout

1. Warm-up and stretching:
   - Give brief overview of the history of computers and code
   - Abstraction: why do we write code and why do we think it's hard? (the computer is stupid, you make it smart!)
   - Introduction to JavaSctipt, what is it and why do we need it?
   - Introduction to React.js
   - Plan the project: make a drawing and map it to components [1]
2. Clean the create-react-app project so we end up with a blank slate.
3. Together like code-along, create the first wrapping component and include another component.
4. Team up in groups of two. In these groups you will discuss and write all the code. How you do it is up to you, if you code together on one computer and then switch or discuss and code separately, whatever you think work the best. The first assignment is to code and style all the components so you have a dumb sketch of what you want your app to look like.

[1]  ![Screen Shot 2016-11-21 at 08.59.45](/Users/a_thorell/Desktop/Screen Shot 2016-11-21 at 08.59.45.png)

### DAY 2 – Empty state (on load), set up game start point, add images & assign images to cards

1. What is state? We'll keep the entire apps state at top level and then pass it down to the underlying components.
2. Divide the participants into smaller groups of about 6 people. Write the requirements of the app (need to flip cards, know if it or miss etc) on a white-board or similar and then let the groups discuss how they would design the state to hold all the required information.
3. Meet together and discuss how the groups designed the state, what was hard etc. Then draw the state together on a white-board and talk it through.
4. Code-along and create the initial state and a function that will run when you click the "Start new game" button and write something to the console.
5. Sit together in your code-pairs and try to fill the function with the code we need to start a new game.
6. The last hour and a half of the day, finish the function together. Everyone have to close their computers but can take notes and ask questions. You start by showing the code with a projector and go through the entire function line by line. Then you remove the code from the screen and let everybody try to write it themselves. After 15 min everyone has to close their laptops and you show the code again, answering any questions the students might have. Then they can code again for 15 min and so on. Repeat for about four times, or until everyone has got a piece of code that works.

### DAY 3 – Card layout (shuffle and layout)

1. Together, render the number of cards that is defined in the state when you press the "Start new game" button. Start by just adding a function that print something to the console.
2. Alone or in code pairs, fill the function with code. Give a clue by pointing out what props are being passed to Content.js. This will be really hard, so make sure to have a lot of time assigned for thoughts and questions.
3. Finnish of the day by going through the code together to make sure everyone is starting in the same page the next day.

### DAY 4 – Flip card event

Today we'll implement the functionality to flip a card, and to compare the two cards that are flipped with the respective actions to follow. Depending on what works best for your students, you might want to do this functionality in code pairs, or using the "code for 15 min then peak" approach from day 2, or just do a code along where the students can ask questions.

The goal of the day is to have a fully working but quite blunt app. The students will discover bugs and things that aren't quite working, which gives you a good starting point to talk about usability and the fact that building products is about so much more than just writing code that "works".

### DAY 5 – Happy “You did it message!” and release

Start the day off by discussing the bugs and unwanted behaviour that the students have discovered, and how you can solve them. The next step is for all of them to be a bit creative and add some kind of message or animation to appear once the player has finished a game of memory.

Help the students to put their projects up on the internet (for example by using GitHub pages) so they can brag about them on social media :)

Some students will want to add extra functionality, make the app responsive, work on the styling or just try and understand what they just did. Make sure to leave enough room during the day to help them with all these things!

## Finally

Congratulations, you just helped a bunch of people create their first react-app! My guess is that they are very proud of what they just did and had a lot of fun while doing it. Well done you!