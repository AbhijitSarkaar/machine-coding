function getItemHTML() {
	let item = document.createElement('div');
	let itemText = document.createElement('div');
	let deleteButton = document.createElement('div');
	item.id = 'item';
	itemText.id = 'item-text';
	deleteButton.id = 'delete-icon';
	item.appendChild(itemText);
	item.appendChild(deleteButton);
	return item;
}

document.getElementById('add-item').addEventListener('click', () => {
	let toDoItems = document.getElementById('items-container');
	toDoItems.appendChild(getItemHTML());
});

document.getElementById('delete-icon').addEventListener('click', () => {
	alert('item deleted');
});
