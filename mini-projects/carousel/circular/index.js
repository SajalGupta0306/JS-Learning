import "./styles.css";

const images = [
  "https://images.dog.ceo//breeds//malamute//n02110063_1058.jpg",
  "https://images.dog.ceo//breeds//terrier-irish//n02093991_913.jpg",
  "https://images.dog.ceo//breeds//terrier-norfolk//n02094114_981.jpg"
];

const img = document.getElementById("img");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
let currentImgIdx = 0;
const lastIdx = images.length - 1;

backward.addEventListener("click", function () {
  if (currentImgIdx <= 0) {
    currentImgIdx = lastIdx;
    img.src = images[currentImgIdx];
    return;
  }
  currentImgIdx -= 1;
  img.src = images[currentImgIdx];
});

forward.addEventListener("click", function () {
  if (currentImgIdx >= lastIdx) {
    currentImgIdx = 0;
    img.src = images[currentImgIdx];
    return;
  }
  currentImgIdx += 1;
  img.src = images[currentImgIdx];
});
