import { todo, done } from './data.js';

let todoList = [...todo],
	doneList = [...done];

if (localStorage.getItem('todo')) {
	todoList = JSON.parse(localStorage.getItem('todo'));
} else localStorage.setItem('todo', JSON.stringify(todoList));

if (localStorage.getItem('done')) {
	doneList = JSON.parse(localStorage.getItem('done'));
} else localStorage.setItem('done', JSON.stringify(doneList));

/**
 *
 * @param {*} name : Name of the task to be created
 * @param {*} desc : Description of the task to be created
 */

const newTask = (name, desc) => {
	let nameDiv = document.createElement('div');
	nameDiv.innerText = 'Name: ' + name;
	nameDiv.id = 'list-task-name';

	let descDiv = document.createElement('div');
	descDiv.innerText = 'Description: ' + desc;
	descDiv.id = 'list-task-desc';

	let listTask = document.createElement('div');
	listTask.id = 'list-task';
	listTask.draggable = true;
	listTask.append(nameDiv);
	listTask.append(descDiv);

	return listTask;
};

window.onload = () => {
	todoList.forEach((item) => {
		document.getElementById('todo-list-tasks').append(newTask(item.name, item.desc));
	});
	doneList.forEach((item) => {
		document.getElementById('done-list-tasks').append(newTask(item.name, item.desc));
	});
};

document.getElementById('add-task').addEventListener('click', () => {
	let taskName = document.getElementById('task-name').value;
	let taskDesc = document.getElementById('task-desc').value;
	if (!taskDesc || !taskName) {
		alert('Name/Desc is empty');
	} else {
		todoList.push({
			name: taskName,
			desc: taskDesc,
			status: 'todo',
		});
		localStorage.setItem('todo', JSON.stringify(todoList));
		document.getElementById('todo-list-tasks').append(newTask(taskName, taskDesc));

		//clearing the input values
		document.getElementById('task-name').value = '';
		document.getElementById('task-desc').value = '';
	}
});

document.getElementById('todo-list-tasks').addEventListener('dragstart', (event) => {
	if (event.target.id === 'list-task') {
		console.log('started');
	}
});

document.getElementById('todo-list-tasks').addEventListener('dragend', (event) => {
	if (event.target.id === 'list-task') {
		console.log('ended');
	}
});
