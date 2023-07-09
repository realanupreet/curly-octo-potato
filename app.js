const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const userTaskList = document.getElementById("user-task-list");
const assigneeSelect = document.getElementById("assignee-select");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;
  const assignees = Array.from(assigneeSelect.selectedOptions).map(
    (option) => option.value
  );

  if (taskText.trim() !== "" && assignees.length > 0) {
    assignees.forEach((assignee) => {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
              <span>${assignee}: ${taskText}</span>
              <button class="delete-btn">Delete</button>
            `;

      // Add event listener to delete task button
      const deleteBtn = taskItem.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", function () {
        taskItem.remove();
      });

      taskItem.style.display = "flex";
      taskItem.style.justifyContent = "space-between";
      taskItem.style.alignItems = "center";
      taskItem.style.marginBottom = "10px";

      deleteBtn.style.backgroundColor = "#f44336";
      deleteBtn.style.color = "#ffffff";
      deleteBtn.style.padding = "5px 10px";
      deleteBtn.style.border = "none";
      deleteBtn.style.borderRadius = "4px";
      deleteBtn.style.cursor = "pointer";
      deleteBtn.style.fontSize = "12px";

      userTaskList.appendChild(taskItem);
    });

    taskInput.value = "";
  }
}

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Add event listener to the input field to add a task on pressing enter
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
