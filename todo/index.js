const addBtn = document.getElementById("add-btn");
const inputField = document.getElementById("todo-input");
const todoItems = document.getElementById("todo-items-container");
const clearAllBtn = document.getElementById("clear-all");

addBtn.addEventListener("click", () => {
  const todoTask = inputField.value.trim();

  if (todoTask === "") {
    alert("Enter a todo task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = todoTask;

  const clearBtn = document.createElement("button");
  clearBtn.textContent = "x";

  clearBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(clearBtn);
  todoItems.appendChild(li);

  inputField.value = "";
});

clearAllBtn.addEventListener("click", () => {
  todoItems.innerHTML = "";
  todoItems.textContent = "Tasks to do: ";
});

inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
