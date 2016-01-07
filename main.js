var currentVal = "";
var displayVal = "";
// var log = [];
// var firstSolve = false;
var Ans = 0;

function enterValues(x) {
  currentVal += x;
  displayVal += x;
  lastInput = x;
  display();
}

function enterOps(x, y) {
  if (x === " + ") {
    currentVal += " + ";
    displayVal += " + ";
  }
  else if (x === " - ") {
    currentVal += " - ";
    displayVal += " - ";
  }
  else if (x === " * ") {
    currentVal += " * ";
    displayVal += " \u00d7 ";
  }
  else if (x === " / ") {
    currentVal += " / ";
    displayVal += " \u00f7 ";
  }
  display();
}

function solveVals() {
  Ans = eval(currentVal);

  display();
  logActions();
  currentVal = "Ans";
  displayVal = "Ans";
}

/*
function clearVal() {
  console.log(lastInput);
  currentVal = currentVal.slice(0, -lastInput.length);
  displayVal = displayVal.slice(0, -lastInput.length);
  display();
}
*/

function reset() {
  currentVal = ""
  displayVal = ""
  Ans = 0;
  console.clear();
  display();
  document.getElementById('logText').innerHTML = "";
}

function display() {
  document.getElementById('input1').value = displayVal;
  document.getElementById('displayBoxP').innerHTML = Ans;
}

function logActions() {
  //document.getElementById('logText').innerHTML += "Log succesful. Answer is " +
  //                                                 String(Ans) + " <br>";
  document.getElementById('logText').innerHTML += displayVal + " = " + Ans + " <br>";
}
