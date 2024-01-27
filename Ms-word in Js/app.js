var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");

function bold() {
  var text = (document.getElementById("text").style.fontWeight = "1000");
  btn1.className = "btn-color";
}

function atalic() {
  var text = (document.getElementById("text").className += " atalic");
  btn2.className = "btn-color";
}

function underlain() {
  var text = (document.getElementById("text").className += " underlain");
  btn3.className = "btn-color";
}

function lainthro() {
  var text = (document.getElementById("text").className += " lainthro");
  btn4.className = "btn-color";
}

function uppercas() {
  var text = (document.getElementById("text").className += " uppercas ");
  btn5.className = "btn-color";
}

function laftalin() {
  var text = (document.getElementById("text").style.textAlign = " left");
  btn6.className = "btn-color";
}

function alincenter() {
  var text = (document.getElementById("text").style.textAlign = "center");
  btn7.className = "btn-color";
}

function raitalin() {
  var text = (document.getElementById("text").style.textAlign = "end");
  btn8.className = "btn-color";
}
