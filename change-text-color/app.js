const heading = document.getElementById("mainHeading");
document.getElementById("resetButton").onclick = () =>
  (heading.style.color = "black");

document.getElementById("redButton").onclick = () =>
  (heading.style.color = "red");
document.getElementById("greenButton").onclick = () =>
  (heading.style.color = "green");
document.getElementById("blueButton").onclick = () =>
  (heading.style.color = "blue");
document.getElementById("purpleButton").onclick = () =>
  (heading.style.color = "purple");
