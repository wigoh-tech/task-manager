const inputValue = document.getElementById("taskInput")
const listOfTask = document.getElementById("tasklist")
function handleSubmit() {
  const taskData = inputValue.value.trim()
  if (taskData) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskData);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    addTask(taskData)
    inputValue.value = ""
  }
  else {
    alert("please enter the task!")
  }
}
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
function addTask(taskData) {
  const art = document.createElement("p");
  art.textContent = taskData;
  listOfTask.appendChild(art)

}
window.onload = function(){
  const tasks = JSON.parse(localStorage.getItem("tasks"))|| [];
  tasks.forEach(taskData => addTask(taskData))
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}