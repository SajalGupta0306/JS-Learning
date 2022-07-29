// https://stackblitz.com/edit/js-3kasss?file=index.html,index.js,style.css

const clickBtn = document.querySelector("#modelBtn");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector("#simpleModal");

clickBtn.addEventListener("click", function (e) {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function (e) {
  modal.style.display = "none";
});

// close the modal when clicked outside anywhere
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
