import "./styles.css";

let timer;

document.getElementById("main").addEventListener("click", function (e) {
  if (e.target.innerText === "Start / Resume") {
    timer = setInterval(() => {
      const value = document.getElementById("count").innerText;
      document.getElementById("count").innerText = Number(value) + 1;
    }, 1000);
  } else if (e.target.innerText === "Stop") {
    clearInterval(timer);
  } else {
    document.getElementById("count").innerText = 0;
  }
});
