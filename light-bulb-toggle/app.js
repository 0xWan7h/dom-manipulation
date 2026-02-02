const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");
const bulbStatus = document.getElementById("status");
const body = document.getElementById("body");

let isOn = false;

toggleButton.addEventListener("click", () => {
  isOn = !isOn;

  const bulbClass = bulb.classList;
  if (isOn) {
    bulbClass.remove("off");
    toggleButton.textContent = "Turn Off";
    bulbStatus.textContent = "Status: On";
    body.classList.remove("dark-mode");
  } else {
    bulbClass.add("off");
    toggleButton.textContent = "Turn On";
    bulbStatus.textContent = "Status: Off";
    body.classList.add("dark-mode");
  }
});
