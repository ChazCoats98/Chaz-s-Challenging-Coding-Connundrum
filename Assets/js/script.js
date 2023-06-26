var button = document.getElementById("#startBtn");
var timerDisplay = document.getElementById("#timer");
var questionBox = document.getElementById("#questions");
var answerEl = document.getElementsByClassName(".answer");
var answerA = document.getElementById("#answer-a");
var answerB = document.getElementById("#answer-b");
var answerC = document.getElementById("#answer-c");
var answerD = document.getElementById("#answer-d");
var scoreBox = document.getElementById("#score");
var initTime = 60;
var score = 0;
var questionNumber = 0;

var questions = [
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
//deselects check boxes next to answers
function deselector() {
answerEl.array.forEach((answer) => (answer.checked = false));
}

function userAnswer() {
  var answer;
  answerEl.forEach(answerElement) {
    if (answerElement.checked) {
      answer = answerElement.id;
    };
    return answer;
  };
};

function questionDisplay() {
  deselector();
  var testQuestions = questions[questionNumber];
  questionBox.innerHTML = testQuestions.question;
  answerA.innerHTML = testQuestions.A;
  answerB.innerHTML = testQuestions.B;
  answerC.innerHTML = testQuestions.C;
  answerD.innerHTML = testQuestions.D;
}

questionDisplay();


function timer() {
  var timerVal = setInterval(function() {
  initTime--;
  timerDisplay.textContent = initTime;
   }, 1000);
}
  timer();

button.addEventListener("click", function() {
  var answer = userAnswer();
  if (answer) {
    if (answer === questions[questionNumber].rightanswer) {
      score++;
      questions++;
    }
    if (questionNumber < questions.length) {
      questionDisplay();
    } else {
      
    }
    
  }
})