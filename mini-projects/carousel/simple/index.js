import "./styles.css";

const images = [
  "https://picsum.photos/id/100/200/300",
  "https://picsum.photos/id/1024/200/300",
  "https://picsum.photos/id/1036/200/300"
];

var img = document.getElementById("image");
var currentImgIndex = 0;

document.getElementById("prevButton").addEventListener("click", function () {
  if (currentImgIndex <= 0) {
    document.getElementById("prevButton").style.pointerEvents = "none";
    document.getElementById("prevButton").style.cursor = "default";
    return;
  }
  --currentImgIndex;
  img.src = images[currentImgIndex];
  document.getElementById("prevButton").style.pointerEvents = "auto";
  document.getElementById("prevButton").style.cursor = "pointer";
  document.getElementById("nextButton").style.cursor = "pointer";
});

document.getElementById("nextButton").addEventListener("click", function () {
  if (currentImgIndex >= images.length - 1) {
    document.getElementById("nextButton").style.pointerEvents = "none";
    document.getElementById("nextButton").style.cursor = "default";
    return;
  }
  ++currentImgIndex;
  img.src = images[currentImgIndex];
  document.getElementById("nextButton").style.pointerEvents = "auto";
  document.getElementById("nextButton").style.cursor = "pointer";
  document.getElementById("prevButton").style.cursor = "pointer";
});
