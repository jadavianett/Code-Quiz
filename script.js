var startButton = document.querySelector("#start-btn");
var nextButton = document.querySelector("#next-btn");
var questionContainerEl = document.querySelector("#question-container");
var secondsLeftEl = document.querySelector("#seconds-left");
var highscoresEl = document.querySelector("#high-scores");
var questionEl = document.querySelector("#question");
var welcomePage = document.querySelector("#welcome-page");
var answerButtonsEl = document.querySelector("#answer-btns");
var secondsLeft = 120;
var questionArray = [
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

var currentQuestionIndex = 0;

startButton.addEventListener("click", startQuiz);
// nextButton.addEventListener("click", () => {
//   currentQuestionIndex++;
//   resetState;
// });

function startQuiz() {
  setTime();
  currentQuestionIndex = 0;
  answerButtonsEl.classList.remove("hide");
  questionEl.classList.remove("hide");
  welcomePage.classList.add("hide");
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  showNextQuestion();
}

function showNextQuestion(question) {
  var currentBtn = 0;
  questionEl.innerText = questionArray[currentQuestionIndex].question;
  answerButtonsEl.innerHTML = "";
  questionArray[currentQuestionIndex].answers.forEach((answer) => {
    currentBtn++
    answerButtonsEl.innerHTML += `
  <button class="btn" id=button${currentBtn} isCorrect = ${answer.correct} onclick = "javascript: selectAnswer(this)">${answer.text}</button>
  `;
  });
}

function resetState() {
  resetAnswers();
  showNextQuestion();
}

function selectAnswer(event) {
  
  var btnClickedName = event.id;
  var btnIsCorrect = document.getElementById(btnClickedName).getAttribute("isCorrect");

  console.log(btnIsCorrect)
  if (btnIsCorrect == "true") {
    document.getElementById("info").innerHTML = "Correct Answer";
    document.getElementById('isCorrect-answer').classList.remove("hide")
    currentQuestionIndex++;
    showNextQuestion();
  } else {
    document.getElementById("info").innerHTML = "Wrong Answer";
    document.getElementById('isCorrect-answer').classList.remove("hide")
    secondsLeft = secondsLeft - 10;
    currentQuestionIndex++;
    showNextQuestion();
  }


}
function resetAnswers() {
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
  nextButton.classList.add("hide");
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    secondsLeftEl.textContent = "Time left: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
