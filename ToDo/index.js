let inputText = '';

function ItemHTML() {
	let item = document.createElement('div');
	let itemText = document.createElement('div');
	let deleteButton = document.createElement('div');

	//set the ids
	item.id = 'item';
	itemText.id = 'item-text';
	deleteButton.id = 'delete-icon';

	//insert inner texts
	itemText.innerText = inputText;
	deleteButton.innerText = 'Delete';

	//append the created elements
	item.appendChild(itemText);
	item.appendChild(deleteButton);

	deleteButton.addEventListener('click', () => {
		document.getElementById('items-container').removeChild(item);
	});

	return item;
}

document.getElementById('add-item').addEventListener('click', () => {
	if (inputText.length) {
		let toDoItems = document.getElementById('items-container');
		toDoItems.appendChild(ItemHTML());

		//clearing the input
		inputText = '';
		document.getElementById('item-input').value = '';
	} else {
		alert('input is empty');
	}
});

//Event delegation

// document.addEventListener('click', (e) => {
// 	if (e.target && e.target.id === 'delete-icon') {
// 		alert('item deleted');
// 	}
// });

document.getElementById('item-input').addEventListener('input', (e) => {
	inputText = e.target.value;
});
