function handleSubmit() {
    let input = document.getElementById("taskInput");
    let inputValue = input.value;

    if (inputValue !== "") {
        let taskElement = document.createElement("article");
        taskElement.classList.add("taskdata");
        taskElement.innerHTML = inputValue;
        let taskContainer = document.getElementById("taskContainer");
        taskContainer.appendChild(taskElement);
        input.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function handleRemove() {
    let taskContainer = document.getElementById("taskContainer");
    let tasks = taskContainer.getElementsByClassName("taskdata");
  
    if (tasks.length > 0) {
      taskContainer.removeChild(tasks[tasks.length - 1]);
    } else {
      alert("There is no task.");
    }
  }
  