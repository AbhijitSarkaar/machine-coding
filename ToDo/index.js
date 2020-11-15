let inputText = '';

function getItemHTML() {
	let item = document.createElement('div');
	let itemText = document.createElement('div');
	let deleteButton = document.createElement('div');
	item.id = 'item';
	itemText.id = 'item-text';
	deleteButton.id = 'delete-icon';
	itemText.innerText = inputText;
	item.appendChild(itemText);
	item.appendChild(deleteButton);
	return item;
}

document.getElementById('add-item').addEventListener('click', () => {
	if (inputText.length) {
		let toDoItems = document.getElementById('items-container');
		toDoItems.appendChild(getItemHTML());
		inputText = '';
		document.getElementById('item-input').innerText = '';
	} else {
		alert('input is empty');
	}
});

document.getElementById('delete-icon').addEventListener('click', () => {
	alert('item deleted');
});

document.getElementById('item-input').addEventListener('input', (e) => {
	inputText = e.target.value;
});
