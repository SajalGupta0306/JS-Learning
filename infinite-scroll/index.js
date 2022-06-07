const container = document.querySelector(".container");

function loadImages(numImages = 12) {
  let i = 0;
  while (i < numImages) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = `${data.message}`;
        container.appendChild(img);
      });
    i++;
  }
}
loadImages();

// listen for scroll event and load more images if we reach the bottom of window
window.addEventListener("scroll", () => {
  // scrollY - the page scrolled till now from top
  // innerHeight - height of the document which can be viewed by user currently
  // scrollHeight - total height of the document
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight

    // window.scrollY + window.innerHeight >=
    // document.body.offsetHeight
  ) {
    loadImages();
  }
});
