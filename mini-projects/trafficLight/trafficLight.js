// Traffic Light
//TrafficLight

// HTML Portion:

<div class="box">
  <div class="light"></div>
  <div class="light"></div>
  <div class="light"></div>
</div>

// CSS Portion
.box {
  width: 90px;
  height: 300px;
  padding: 5px;
  background-color: black;
}
.light {
  border-radius: 50%;
  border: 2px dashed black;
  margin: 5px;
  height: 90px;
  background-color: white;
}
.red {
  background-color: red;
}
.yellow {
  background-color: yellow;
}
.green {
  background-color: green;
}

// JS Code:

const allLights = document.querySelectorAll(".light")
const config = [
  {
    color: "red",
    time: 2000,
  },
  {
    color: "yellow",
    time: 2500,
  },
  {
    color: "green",
    time: 1500,
  },
]

allLights[0].classList.add(config[0].color) // assigning red color on load for first time
let counter = 1 // since we want to start from yellow now
setInterval(() => {
  allLights.forEach((element, id) => element.classList.remove(config[id].color))
  allLights[counter].classList.add(config[counter].color)
  if (counter >= 2) {
    counter = 0
  } else {
    counter += 1
  }
}, config[counter].time)
