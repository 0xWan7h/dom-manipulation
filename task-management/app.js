const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

function handleTaskManagement() {
  const taskItem = taskInput.value;
  let totalTaskCount = 0;
  let completedTasksCount = 0;
  if (!taskItem) {
    alert("Please enter task item first");
    return;
  }
  if (document.querySelector(".empty-list")) {
    document.querySelector(".empty-list").style.display = "none";
  }
  const li = document.createElement("li");
  li.classList.add("task-item");
  const span = document.createElement("span");
  const input = document.createElement("input");
  input.type = "checkbox";
  span.textContent = taskItem;
  span.className = "task-text";
  li.appendChild(input);
  li.appendChild(span);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  deleteButton.className = "delete-button";
  li.appendChild(deleteButton);
  taskList.appendChild(li);
  taskInput.value = "";

  deleteButton.addEventListener("click", () => {
    taskList.removeChild(li);
    totalTaskCount = taskList.childElementCount - 1;
    if (!totalTaskCount) {
      document.querySelector(".empty-list").style.display = "block";
    }
    updateTotalTasks(totalTaskCount);
    const elements = document.querySelectorAll(".completed");
    completedTasksCount = elements.length;

    updateCompletedTasks(completedTasksCount);
  });

  input.addEventListener("click", () => {
    li.classList.toggle("completed");
    input.className = "complete-checkbox";

    const elements = document.querySelectorAll(".completed");
    completedTasksCount = elements.length;

    updateCompletedTasks(completedTasksCount);
  });
  totalTaskCount = taskList.childElementCount - 1;
  updateTotalTasks(totalTaskCount);
  updateCompletedTasks(completedTasksCount);
}

function updateTotalTasks(totalTaskCount) {
  totalTasks.textContent = `Total tasks: ${totalTaskCount}`;
}

function updateCompletedTasks(completedTasksCount) {
  completedTasks.textContent = `Completed: ${completedTasksCount}`;
}

addButton.addEventListener("click", handleTaskManagement);

taskInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    handleTaskManagement();
  }
});
