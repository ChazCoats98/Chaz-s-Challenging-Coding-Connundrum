var button = document.getElementById("#startBtn");
var quiz = document.getElementById("#quiz");
var timerDisplay = document.getElementById("#timer");
var questionEl = document.getElementById("#questions");
var answerEl = document.getElementsByClassName("#answers");
var answerA = document.getElementById("#answer-a");
var answerB = document.getElementById("#answer-b");
var answerC = document.getElementById("#answer-c");
var answerD = document.getElementById("#answer-d");
var scoreBox = document.getElementById("#score");
var contBtn = document.getElementById("#contBtn");
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

function questionDisplay() {
  deselector();
questionEl.textContent = questions[questionNumber].question;
answerEl.innerHTML= ""
for (let i=0; i < questions[questionNumber].A.length; i++) {
  var answersDiv = document.createElement("div");
  var answerlist = document.createElement("input");
  var answerLabel = document.createElement("label");

  answerlist.type = "radio";
  answerlist.name = "answer";
  answerlist.value = i;

  answerLabel.textContent = questions[questionNumber].A[i].text;

  answersDiv.appendChild(answerlist);
  answersDiv.appendChild(answerLabel);
  answerEl.appendChild(answersDiv);
  }
}

questionDisplay();


function timer() {
  var timerVal = setInterval(function() {
  initTime--;
  timerDisplay.textContent = initTime;
   }, 1000);
}

button.addEventListener("click", function() {
  button.style.display = "none";
  contBtn.style.display = "inline";
  const answer = userAnswer();
  if (answer) {
    if (answer === questions[questionNumber].rightanswer) score++;
      questions++;
    
    if (questionNumber < questions.length) questionDisplay();
      else {
        quiz.innerHTML =
      }
    
    
  }
})
const Questions = [{
  q: "What is capital of India?",
  a: [{ text: "Gandhinagar", isCorrect: false },
  { text: "Surat", isCorrect: false },
  { text: "Delhi", isCorrect: true },
  { text: "Mumbai", isCorrect: false }
  ]

},
{
  q: "What is the capital of Thailand?",
  a: [{ text: "Lampang", isCorrect: false, isSelected: false },
  { text: "Phuket", isCorrect: false },
  { text: "Ayutthaya", isCorrect: false },
  { text: "Bangkok", isCorrect: true }
  ]

},
{
  q: "What is the capital of Gujarat",
  a: [{ text: "Surat", isCorrect: false },
  { text: "Vadodara", isCorrect: false },
  { text: "Gandhinagar", isCorrect: true },
  { text: "Rajkot", isCorrect: false }
  ]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
  const question = document.getElementById("ques")
  const opt = document.getElementById("opt")

  question.textContent = Questions[currQuestion].q;
  opt.innerHTML = ""

  for (let i = 0; i < Questions[currQuestion].a.length; i++) {
      const choicesdiv = document.createElement("div");
      const choice = document.createElement("input");
      const choiceLabel = document.createElement("label");

      choice.type = "radio";
      choice.name = "answer";
      choice.value = i;

      choiceLabel.textContent = Questions[currQuestion].a[i].text;

      choicesdiv.appendChild(choice);
      choicesdiv.appendChild(choiceLabel);
      opt.appendChild(choicesdiv);
  }
}

loadQues();

function loadScore() {
  const totalScore = document.getElementById("score")
  totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
  if (currQuestion < Questions.length - 1) {
      currQuestion++;
      loadQues();
  } else {
      document.getElementById("opt").remove()
      document.getElementById("ques").remove()
      document.getElementById("btn").remove()
      loadScore();
  }
}

function checkAns() {
  const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

  if (Questions[currQuestion].a[selectedAns].isCorrect) {
      score++;
      console.log("Correct")
      nextQuestion();
  } else {
      nextQuestion();
  }
}