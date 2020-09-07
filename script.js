var startButton = document.querySelector("#start-btn");
var questionContainerEl = document.querySelector("#question-container");
var questions = [
  {
    question: "Commonly used data types do NOT include",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
  {
    question: "The condition in an if/else statement is enclosed between",
    answers: [
      { text: "brackets", correct: false },
      { text: "parentheses", correct: true },
      { text: "curly braces", correct: false },
      { text: "quotation marks", correct: false },
    ],
  },
  {
    question: "Arrays in Javascript can be used to store:",
    answers: [
      { text: "booleans", correct: false },
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within ________ when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly braces", correct: false },
      { text: "quotation marks", correct: true },
      { text: "parentheses", correct: true },
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "terminal", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true },
    ],
  },
];

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  // console.log("you pressed the start button.");
  startButton.classList.add("hide");
  setNextQuestion();
}

function setNextQuestion() {}

function selectAnswer() {}
