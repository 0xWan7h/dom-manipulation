const resultInput = document.getElementById("result");
const calculateBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");
const tempInput = document.getElementById("temperature");
const celsius = document.getElementById("celsius");
const farenheit = document.getElementById("farenheit");

calculateBtn.addEventListener("click", () => {
  const temp1 = tempInput.value;
  const temp = parseInt(temp1);
  if (isNaN(temp)) {
    alert("Enter correct temperature");
    return;
  }

  if (celsius.checked) {
    resultInput.value = temperatureConveter(temp, "C");
  } else if (farenheit.checked) {
    resultInput.value = temperatureConveter(temp, "F");
  } else {
    alert("Select the scale type you have entered");
    return;
  }
});

function temperatureConveter(value, type) {
  if (type == "C") {
    return value * (9 / 5) + 32 + "F";
  } else if (type == "F") {
    return ((value - 32) * 5) / 9 + "C";
  }
}

clearBtn.addEventListener("click", () => {
  resultInput.value = "";
  tempInput.value = "";
  celsius.checked = false;
  farenheit.checked = false;
});
