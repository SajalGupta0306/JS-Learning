const images = [
  "https://images.dog.ceo//breeds//malamute//n02110063_1058.jpg",
  "https://images.dog.ceo//breeds//terrier-irish//n02093991_913.jpg",
  "https://images.dog.ceo//breeds//terrier-norfolk//n02094114_981.jpg",
];

const img = document.getElementById("img");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");

// code for adding circles: start
const circles_parent = document.querySelector(".parent");
const makeCircles = () => {
  const span = document.createElement("span");
  span.classList.add("inner-circle");
  circles_parent.append(span);
};
for (let i = 0; i < images.length - 1; i++) {
  makeCircles();
}
// code for adding circles: end

let currentImgIdx = 0;
const lastIdx = images.length - 1;

backward.addEventListener("click", function () {
  if (currentImgIdx <= 0) {
    currentImgIdx = lastIdx;
    img.src = images[currentImgIdx];
    markCircle(currentImgIdx);
    return;
  }
  currentImgIdx -= 1;
  img.src = images[currentImgIdx];
  markCircle(currentImgIdx);
});

forward.addEventListener("click", function () {
  if (currentImgIdx >= lastIdx) {
    currentImgIdx = 0;
    img.src = images[currentImgIdx];
    markCircle(currentImgIdx);
    return;
  }
  currentImgIdx += 1;
  img.src = images[currentImgIdx];
  markCircle(currentImgIdx);
});

// code to dynamically circle a child
function markCircle(index) {
  const parent = document.querySelector(".parent");
  const children = Array.from(parent.children);
  children.forEach((child, idx) => {
    if (idx === index) {
      child.classList.remove("checked");
      child.classList.add("checked");
    } else {
      child.classList.remove("checked");
    }
  });
}
