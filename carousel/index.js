const imageFolder = [
  "https://picsum.photos/id/100/200/300",
  "https://picsum.photos/id/1024/200/300",
  "https://picsum.photos/id/1036/200/300",
];

let imageIndex = 0;
const imgDiv = document.getElementById("imageDiv");
const imgPlaceholder = imgDiv.getElementsByTagName("img");
const containerDiv = document.getElementById("dotDiv");
const dotSpans = containerDiv.getElementsByTagName("span");

function goToPreviousImage() {
  if (imageIndex < 1) {
    document.getElementById("previousButton").style.pointerEvents = "none";
    document.getElementById("previousButton").style.cursor = "default";
    return;
  }
  --imageIndex;
  dotSpans[imageIndex + 1].className = "dot";
  dotSpans[imageIndex].className = "dot selectedDot";
  imgPlaceholder[0].src = imageFolder[imageIndex];
  document.getElementById("previousButton").style.cursor = "pointer";
}

function goToNextImage() {
  if (imageIndex === imageFolder.length - 1) {
    document.getElementById("nextButton").style.pointerEvents = "none";
    document.getElementById("nextButton").style.cursor = "default";
    return;
  }
  ++imageIndex;
  dotSpans[imageIndex - 1].className = "dot";
  dotSpans[imageIndex].className = "dot selectedDot";
  imgPlaceholder[0].src = imageFolder[imageIndex];
  document.getElementById("nextButton").style.cursor = "pointer";
}
