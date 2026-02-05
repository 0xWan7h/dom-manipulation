const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

addButton.addEventListener("click", () => {
  const taskItem = taskInput.value.trim();
  if (!taskItem) {
    alert("Enter task item before clicking on add");
    return;
  }
  taskList.innerHTML = "";
  const liEl = document.createElement("li");
  const inputEl = document.createElement("input");
  const labelEl = document.createElement("label");
  inputEl.type = "checkbox";
  labelEl.appendChild(inputEl);
  labelEl.appendChild(document.createTextNode(taskItem));
  liEl.appendChild(labelEl);
  liEl.setAttribute("class", "task-item task-text");
  taskList.appendChild(liEl);
});
