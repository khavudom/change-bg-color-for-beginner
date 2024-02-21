const showHexCode = document.querySelector("p.show-hex-code");
const changeButton = document.querySelector(".change-background");
const stopButton = document.querySelector("button.stop");
let interval;
const hexCharactor = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

// random to make hex color
function hexCodeRandom() {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * hexCharactor.length);
    hexCode += hexCharactor[index];
  }
  return hexCode;
}
// change Background color fuction
function changeBackColor() {
  interval = setInterval(function () {
    document.body.style.backgroundColor = hexCodeRandom();
    showHexCode.textContent = hexCodeRandom();
  }, 1000);
}
// addEvent to both button
changeButton.addEventListener("click", changeBackColor);
stopButton.addEventListener("click", function () {
  clearInterval(interval);
});

// You learned from this project
// DOM
// hex color
// setInterval function
// clearInterval
// EventListener
// Array
// Loop
//
