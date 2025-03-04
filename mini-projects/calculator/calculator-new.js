const input = document.querySelector("input");
const specialChars = ["DEL", "%", "/", "*", "-", "+", "=", "AC"];
const btnsList = document.querySelectorAll("button");
let finalInput = "";

const clickBtn = (e) => {
  debugger;
  const btnValue = e.target.innerText;
  if (btnValue === "=" && finalInput) {
    finalInput = eval(finalInput);
  } else if (btnValue === "AC") {
    finalInput = "";
  } else if (finalInput && btnValue === "DEL") {
    finalInput = finalInput.toString().slice(0, -1);
  } else if (!finalInput && specialChars.includes(btnValue)) {
    finalInput = "";
  } else {
    finalInput += btnValue;
  }
  console.log(finalInput);
  input.value = finalInput;
};

btnsList.forEach((btn) => {
  btn.addEventListener("click", clickBtn);
});
