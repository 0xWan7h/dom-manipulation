const clearBtn = document.getElementById("clear-btn");
const inputDisplay = document.getElementById("input-display");
const resultInput = document.getElementById("result-input");
const equalButton = document.getElementById("equal-btn");

clearBtn.addEventListener("click", () => {
  resultInput.value = "";
  inputDisplay.value = "";
});

function handleClickButton(element) {
  let value = `${inputDisplay.value}${element.innerText}`;
  inputDisplay.value = value;
  console.log(value);

  equalButton.addEventListener("click", () => {
    try {
      resultInput.value = eval(inputDisplay.value);
    } catch (error) {
      alert("Please enter a number after your operator");
    }
  });
}
