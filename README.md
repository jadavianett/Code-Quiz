# Code Quiz Read Me 
Welcome to my Code Quiz! Using dynamically updated HTML and CSS powered by Javascript, I was able to build a timed code quiz. The code quiz is interactive and adapts to multiple screen sizes! 

## HTML 
While I have been used to using HTML to do almost all of my coding thus far, this assignment relied heavily on Javascript to dynamically update my HTML. That being said, my HTML page is very bare bones, and simply contains the general divs for my intro page, questions, and answer buttons. The questions are dynamically produced, and the answer buttons themselves are hard coded while their content is filled by manipulating the DOM. 

## CSS
As usual, I used CSS to style the page. Mainly the styling for my button grid and container are found here. I also used CSS to create the "hide" class which I used in my Javascript frequently to manipulate the DOM. 

## JavaScript 
The JavaScript code is mainly responsible for how the web application functions. To start out, I targeted my HTML elements and turned them into variable to manipulate them. Included in those variables is the array of objects that holds my quiz questions and answers. From there, I built several functions that are integral to the application. For example, the showNextQuestion function fills the question element with the question and answer text and the setTime function controls the timer that is in the top right of the page. All of the functions use vanilla JavaScript to manipulate the DOM. 

## Challenges 
I encountered a handful of issues while coding this, mainly that I could not build by endgame function because of an uncaught type error that I could not rectify. That issue bled into showing the high scores which is also not complete because I could not set the local storage variable. 

## Acknowledgements 
I spent a great deal of time spinning my wheels for this assignment, but I made the most progress when I utilized all of my resources. The WebDev Simplified video, Build a Quiz With Javascript, helped me set up the bones for my HTML, CSS, and Javascript code. My classmate, Jude Clark helped a lot by sharing her code and thought process on building her site. Finally, our TA Stanley Lewis offered great help by helping me understand the ES6 element introduced to me by the WebDev Simplified video and using another ES6 tool to make my broken code cycle through my questions. 

## Links 
Link to deployed application: https://jadavianett.github.io/Code-Quiz/ 
Link to GitHub repository: https://github.com/jadavianett/Code-Quiz 