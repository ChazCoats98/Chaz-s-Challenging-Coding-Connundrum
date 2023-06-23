var button = document.getElementById("#startBtn");
var timerDisplay = document.getElementById("#timer");
var initTime = 60;

  function timer() {
    var timerVal = setInterval(function() {
    initTime--;
    timerDisplay.textContent = initTime;
    }, 1000);
  }

    timer();
