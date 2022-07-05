// https://jsfiddle.net/76focm2u/93/

let isOn = true;

document.getElementById("main").addEventListener("mousedown", function () {
  isOn = !isOn;
  if (isOn) {
    changeButtonStyle("on", "blue", "white");
    changeButtonStyle("off", "white", "blue");
  } else {
    changeButtonStyle("on", "white", "blue");
    changeButtonStyle("off", "blue", "white");
  }
});

function changeButtonStyle(btnId, bgColor, fontColor) {
  document.getElementById(btnId).style.backgroundColor = bgColor;
  document.getElementById(btnId).style.color = fontColor;
}
