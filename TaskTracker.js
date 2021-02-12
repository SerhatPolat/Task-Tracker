const addTaskButton = document.getElementById("addTask");
const tasks = document.getElementById("tasks");
const newTaskInput = document.getElementById("newTaskInput");

addTaskButton.addEventListener('click', function() {
	var paragraph = document.createElement('p');
	paragraph.innerText = newTaskInput.value;
	tasks.appendChild(paragraph);
	newTaskInput.value = "";

	paragraph.addEventListener('dblclick', function() {
		tasks.removeChild(paragraph);
	})
})