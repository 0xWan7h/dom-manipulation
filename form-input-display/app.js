const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");

const nameDisplay = document.getElementById("nameDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");
const jobDisplay = document.getElementById("jobDisplay");

nameInput.addEventListener("input", (event) => {
  nameDisplay.textContent = event.target.value;
  if (event.target.value == "") {
    nameDisplay.textContent = "Not provided";
  }
});

jobInput.addEventListener("input", (event) => {
  jobDisplay.textContent = event.target.value;
  if (event.target.value == "") {
    jobDisplay.textContent = "Not provided";
  }
});

ageInput.addEventListener("input", (event) => {
  ageDisplay.textContent = event.target.value;
  if (event.target.value == "") {
    ageDisplay.textContent = "Not provided";
  }
});

bioInput.addEventListener("input", (event) => {
  bioDisplay.textContent = event.target.value;
  if (event.target.value == "") {
    bioDisplay.textContent = "Not provided";
  }
});
