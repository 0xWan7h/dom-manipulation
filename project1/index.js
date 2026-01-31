const themeButton = document.getElementById("theme");
const header = document.getElementById("title");
themeButton.addEventListener("click", () => {
  console.log(document.body.style.backgroundColor);

  const currentColor = document.body.style.backgroundColor;
  if (!currentColor || currentColor == "white") {
    updateBodyOnClickToggle("black", "Light mode", "white");
  } else {
    updateBodyOnClickToggle("white", "Dark mode", "black");
  }
});

function updateBodyOnClickToggle(backgroundColor, innerText, color) {
  document.body.style.backgroundColor = backgroundColor;
  themeButton.innerText = innerText;
  header.style.color = color;
}
