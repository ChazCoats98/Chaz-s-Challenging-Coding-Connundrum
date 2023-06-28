var button = document.getElementById("startBtn");
var quizBox = document.getElementById("quizBox");
var timerDisplay = document.getElementById("timer");
var questionEl = document.getElementById("questions");
var answerEl = document.getElementById("answerEl");
var scoreBox = document.getElementById("score");
var contBtn = document.getElementById("contBtn");
var p = document.getElementById("h2Footer");
var newLi = document.createElement("li");
questionEl.innerText = "Javascript Quiz";
p.innerText = "This is a timed quiz. You have 60 seconds to answer each question correctly. If you answer a question incorrectly 10 seconds will be deducted from the remaining time.";
var initTime = 60;
var score = 0;
var questionNumber = 0;

var qanda = [
  {
    question: "What is the DOM?",
    answers: {
      A: "First Question",
      B: "",
      C: "",
      D: "",
    },
    rightanswer: ""
  },
  {
    question: "What is the DOM?",
    answers: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
    rightanswer: ""
  },
  {
    question: "What is the DOM?",
    answers: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
    rightanswer: ""
  },
  {
    question: "What is the DOM?",
    answers: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
    rightanswer: ""
  },
  {
    question: "What is the DOM?",
    answers: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
    rightanswer: ""
  },
]

function quizDisplay() {
  questionEl.innerText = "" + firstQ.question;
  p.style.display = "none";
qanda.answers.array.forEach(answersLi => {
  var newLi = document.createElement("li");
  
});
  var aLi = document.createElement("li");
  var bLi = document.createElement("li");
  var cLi = document.createElement("li");
  var dLi = document.createElement("li");
  aLi.setAttribute("radio", "");
  answerEl.appendChild(aLi);
  answerEl.appendChild(bLi);
  answerEl.appendChild(cLi);
  answerEl.appendChild(dLi);
  button.style.display = "none";
  var newBtn = document.createElement("button");
  newBtn.innerText = "Check Answer";
  quizBox.appendChild(newBtn);
}
function timer() {
  var timerVal = setInterval(function() {
  initTime--;
  timerDisplay.textContent = initTime;
   }, 1000);
}



button.addEventListener("click", function transition() {
quizDisplay();
});