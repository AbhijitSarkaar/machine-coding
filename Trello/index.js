const newTask = (name, desc) => {
	let nameDiv = document.createElement('div');
	nameDiv.innerText = 'Name ' + name;
	nameDiv.id = 'list-task-name';

	let descDiv = document.createElement('div');
	descDiv.innerText = 'Description ' + desc;
	descDiv.id = 'list-task-desc';

	let listTask = document.createElement('div');
	listTask.id = 'list-task';
	listTask.append(nameDiv);
	listTask.append(descDiv);

	return listTask;
};

document.getElementById('add-task').addEventListener('click', () => {
	let taskName = document.getElementById('task-name').value;
	let taskDesc = document.getElementById('task-desc').value;
	if (!taskDesc || !taskName) {
		alert('Name/Desc is empty');
	} else {
		document.getElementById('list-tasks').append(newTask(taskName, taskDesc));

		//clearing the input values
		document.getElementById('task-name').value = '';
		document.getElementById('task-desc').value = '';
	}
});
