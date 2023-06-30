var button = document.getElementById("startBtn");
var quizBox = document.getElementById("quizBox");
var timerDisplay = document.getElementById("timer");
var scoreDisplay = document.getElementById("score");
var questionEl = document.getElementById("questions");
var answerEl = document.getElementById("answerEl");
var scoreBox = document.getElementById("score");
var contBtn = document.getElementById("contBtn");
var p = document.getElementById("h2Footer");
var response = document.getElementById("aResponse");
var newLi = document.createElement("li");
var newBtn = document.createElement("button");
var tryAgainBtn = document.createElement("button");
tryAgainBtn.innerText = "Try Again";
newBtn.innerText = "Next Question";
questionEl.innerText = "Javascript Quiz";
p.innerText = "This is a timed quiz. You have 60 seconds to answer each question correctly. If you answer a question incorrectly 10 seconds will be deducted from the remaining time.";
var initTime = 60;
var score = 0;
var questionNumber = 0;

var qanda = [
  {
    question: "What is the DOM?",
    answers: ["A 3rd party API that displays dates", "A database of information on javaScript methods","A visual representation of the objects composing the structure of the page", "A method for changing the formatting of text",],
    rightanswer: "A visual representation of the objects composing the structure of the page"
  },
  {
    question: "What is a javaScript function?",
    answers: ["A container that holds multiple values", "An assignable element that performs a task","An item that targets HTML elements", "A javaScript themed party",],
    rightanswer: "An assignable element that performs a task"
  },
  {
    question: "What is the javaScript file extension tag?",
    answers: [".javaScript", ".XTML",".ZIP", ".JS",],
    rightanswer: ".JS"
  },
  {
    question: "Which statement does not define a variable?",
    answers: ["const", "var","let", "int",],
    rightanswer: "int"
  },
  {
    question: "what is used to access ids in your HTML file?",
    answers: [".appendChild", ".getElementById",".getElementByClass", ".parseInt",],
    rightanswer: ".getElementById"
  },
]

//creates queston display box
function quizDisplay() {
  //clears question and answer elements each time function is ran, hides p element, and initializes score counter
  questionEl.innerHTML = "";
  answerEl.innerHTML = "";
  p.style.display = "none";
  timerDisplay.innerHTML = score;
  //constrains each answer to the answerDisp variable
  var answerDisp = qanda[questionNumber].answers;
  //iterates through array of questions and answers and displays the question on the page
  for (let i = 0; i < qanda.length; i++) {
    var questionDisp = qanda[questionNumber].question;
    questionEl.textContent = questionDisp;
  }
  //creates new list item for each possible answer in the array, then runs the checkAnswer function on click
  answerDisp.forEach(function (answersLi) {
    var newLi = document.createElement("li");
    newLi.setAttribute("class", "answerList");
    var listText = document.createTextNode(answersLi);
    newLi.appendChild(listText);
    answerEl.appendChild(newLi);
    newLi.addEventListener("click", checkAnswer);
  });
  button.style.display = "none";
  quizBox.appendChild(newBtn);
  newBtn.addEventListener("click", quizDisplay());
}
//checks list item value against provided right answers in the qanda array, deducts time from timer if answer is incorrect
function checkAnswer(event) {
  var check = event.target;
  if(check.matches("li")) {
    if(check.textContent == qanda[questionNumber].rightanswer) {
      score++;
      response.textContent = "Correct";
    } else {
      initTime = initTime - 5;
      response.textContent = "Incorrect";
    }
  }
}
//sets timer to increment down, once timer reaches 0 the quiz is cleared and a message is displayed showing "sorry times up!"
function timer() {
  var timerVal = setInterval(function() {
  initTime--;
  timerDisplay.textContent = initTime;
  if (initTime <= 0) {
    timerDisplay.style.display = "none";
    answerEl.style.display = "none";
    questionEl.textContent = "Sorry, times up!";
    newBtn.style.display = "none";
    quizBox.appendChild(tryAgainBtn);
  } 
}, 1000);
};



button.addEventListener("click", function transition() {
timer();
quizDisplay();
});

//tryAgainBtn.addEventListener("click", )