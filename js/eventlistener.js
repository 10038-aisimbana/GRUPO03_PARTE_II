document.addEventListener("DOMContentLoaded", function() {
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
var taskText = taskInput.value;

if (taskText.trim() !== "") {
var newTask = document.createElement("li");
newTask.innerText = taskText;

newTask.addEventListener("click", function() {
newTask.classList.toggle("completed");
});

taskList.appendChild(newTask);
taskInput.value = "";
}
});
});