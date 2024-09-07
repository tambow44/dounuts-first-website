import names from "../data/names.json" with { type: 'json' };

window.alert("Look, a nerd called " + names[0].name);
window.alert("Look, a nerd called " + names[1].name);

function quickMaths() {
  var a = 1;
  var b = 2;
  var c = b + b;
  var d = c - 1;
  console.log(b + " plus " + b + " is " + c);
  console.log("minus " + a + ", that's " + d + ", quick maths");
}

quickMaths();
