const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const list = document.querySelector('#task-list');

function addTask(event) {
  event.preventDefault();
  if (input.value.trim() === '') return;
  const taskText = input.value.trim();
  const taskItem = document.createElement('li');
  const taskLabel = document.createElement('label');
  const taskCheckbox = document.createElement('input');
  const taskButton = document.createElement('button');

  taskCheckbox.type = 'checkbox';
  taskCheckbox.addEventListener('click', toggleCompleted);
  taskLabel.textContent = taskText;
  taskButton.textContent = 'Delete';
  taskButton.addEventListener('click', deleteTask);

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskLabel);
  taskItem.appendChild(taskButton);

  list.appendChild(taskItem);
  input.value = '';
}

function toggleCompleted(event) {
  const taskItem = event.target.parentNode;
  if (event.target.checked) {
    taskItem.classList.add('completed');
  } 
else {
	taskItem.classList.remove('completed');
	}
}
	
	function deleteTask(event) {
	const taskItem = event.target.parentNode;
	list.removeChild(taskItem);
	}
	
	form.addEventListener('submit', addTask);
