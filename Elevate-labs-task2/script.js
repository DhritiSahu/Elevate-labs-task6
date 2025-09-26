const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  createTask(taskText);
  taskInput.value = "";
});

// Function to create task element
function createTask(taskText) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  // Toggle complete on text click
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Buttons container
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("task-buttons");

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️ Edit";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑 Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append buttons
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);

  // Append span + buttons to li
  li.appendChild(span);
  li.appendChild(btnDiv);

  // Add to list
  taskList.appendChild(li);
}
