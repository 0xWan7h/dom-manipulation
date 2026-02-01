const inputField = document.getElementById("number-input");
const resultInput = document.getElementById("result-input");

function handleClickButton(el) {
  const exp = `${inputField.value}${el.innerText}`;
  console.log(exp);
  inputField.value = exp;
  
  // Safely evaluate the expression
  try {
    resultInput.value = eval(exp);
  } catch (error) {
    resultInput.value = "";
  }
}

function clearInput() {
  inputField.value = "";
  resultInput.value = "";
}
