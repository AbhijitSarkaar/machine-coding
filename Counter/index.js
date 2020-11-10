let count = 0;

document.getElementById('increase-button').addEventListener('click', () => {
	count++;
	document.getElementById('total-count').innerText = count;
});

document.getElementById('decrease-button').addEventListener('click', () => {
	count--;
	document.getElementById('total-count').innerText = count;
});

document.getElementById('total-count').innerText = count;
