const clearBtn = document.getElementById("clear");
const calculateBtn = document.getElementById("calculate");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const resultInput = document.getElementById("result-input");

calculateBtn.addEventListener("click", () => {
  const weight = weightInput.value;
  const height = heightInput.value;
  console.log(typeof height);
  const bmi = weight / (height / 100) ** 2;

  const value = getBMIInterpretation(bmi);
  resultInput.value = value;
});

clearBtn.addEventListener("click", () => {
  heightInput.value = "";
  weightInput.value = "";
  resultInput.value = "";
});

function getBMIInterpretation(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else if (bmi >= 30) {
    return "Obese";
  } else {
    return "Invalid Height or Weight";
  }
}
