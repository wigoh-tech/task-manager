const inputValue = document.getElementById("taskInput")
const listOfTask = document.getElementById("tasklist")


const currentMode = localStorage.getItem("darkMode") || "light";
if (currentMode === "dark") {
  document.body.classList.add("dark-mode");
}

// add the task and store in the local storage 
function handleSubmit() {
  const taskData = inputValue.value.trim()
  if (taskData) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskData);
    localStorage.setItem("tasks", JSON.stringify(tasks)); backendTaskList
    addTask(taskData)
    inputValue.value = ""
  }
  else {
    alert("please enter the task!")
  }
}

// remove the task and remove the task from the local storage 
function handleRemove() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length > 0) {
    tasks.pop()
    localStorage.setItem("tasks", JSON.stringify(tasks));
    listOfTask.removeChild(listOfTask.lastChild)
  }
  else {
    alert("There is no task!")
  }
}

//funtion to create the task UI
function addTask(taskData) {
  const art = document.createElement("p");
  art.textContent = taskData;
  listOfTask.appendChild(art)
}

//Refresh when thge data load 
window.onload = function () {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(taskData => addTask(taskData))

  const darkModeBtn = document.getElementById("darkmode");
  darkModeBtn.addEventListener("click", toggleDarkMode);
}

//DarkMode Function
function toggleDarkMode() {
  let mode = localStorage.getItem("darkMode") || "light";
  mode = (mode === "dark" ? "light" : "dark");
  localStorage.setItem("darkMode", mode);
  document.body.classList.toggle("dark-mode");
}

const backendData = document.getElementById("backendTaskList");

// Fetch and display tasks from backend
fetch('http://localhost:3000/tasks')
  .then(res => res.json())
  .then(tasks => {
    tasks.forEach(task => {
      const taskEl = document.createElement('p');
      taskEl.textContent = task.task;
      backendData.appendChild(taskEl);
    });
  })
  .catch(err => {
    console.error('Failed to fetch backend tasks:', err);
  });

