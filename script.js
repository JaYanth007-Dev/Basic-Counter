var decreaseButton = document.getElementById("dec");
var inputbox = document.getElementById("textbox");
var increaseButton = document.getElementById("inc");
var resetButton = document.getElementById("clear");
console.log("enter");

inputbox.value = "0";
inputbox.style.color = "black";
decreaseButton.addEventListener("click", decrease);
increaseButton.addEventListener("click", increment);
resetButton.addEventListener("click", reseting);
function decrease() {
  var x = Number(inputbox.value);
  x = x - 1;
  if (x < 0) {
    inputbox.style.color = "red";
  } else if (x == 0) {
    inputbox.style.color = "black";
  }
  inputbox.value = x;
}
function increment() {
  var x = Number(inputbox.value);
  x = x + 1;
  if (x > 0) {
    inputbox.style.color = "green";
  } else if (x == 0) {
    inputbox.style.color = "black";
  }
  inputbox.value = x;
}
function reseting() {
  clickedtimer = false;
  inputbox.value = "0";
  inputbox.style.color = "black";
  clearInterval(valuee);
  clearInterval(timer);
  decreaseButton.disabled = false;
  increaseButton.disabled = false;
}

//*Start Timer Function

var timerBtn = document.getElementById("time");
timerBtn.addEventListener("click", timer);
var clickedtimer = false;
function timer() {
  decreaseButton.disabled = true;
  increaseButton.disabled = true;
  if (!clickedtimer) {
    clickedtimer = true;
    if (inputbox.value < 0) {
      inputbox.value = 0;
      inputbox.style.color = "black";
    }

    valuee = setInterval(increment, 1000);
  } else {
    alert("Button Already Clicked");
  }
}

// *Stop Timer Function

var stoptimerBtn = document.getElementById("stoptime");
stoptimerBtn.addEventListener("click", myStopFunction);
function myStopFunction() {
  clickedtimer = false;
  clearInterval(valuee);
}
