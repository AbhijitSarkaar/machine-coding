let totalMinutes = 2,
	totalSeconds = 0;
let currentMinute = 0;
let nextEvents = [];

getSeconds = () => {
	let promises = [];
	for (let j = 10 * currentMinute + 1; j <= 10 * currentMinute + 10; ++j) {
		let promise = new Promise((resolve, reject) => {
			nextEvents.push(
				setTimeout(() => {
					if (j % 10 === 0) {
						document.getElementById('minute-container').innerText = currentMinute + 1;
					}
					document.getElementById('second-container').innerText = j % 10;
					resolve(j);
				}, j * 1000)
			);
		});
		promises.push(promise);
	}
	if (currentMinute === totalMinutes) {
		Promise.all(promises).then((res) => {
			setTimeout(() => {
				alert('alert after all');
			}, 0);
		});
	}
};

clearScheduledEvents = () => {
	for (let i = 0; i < nextEvents.length; ++i) {
		clearTimeout(nextEvents[i]);
	}
};

document.getElementById('start-button').addEventListener('click', (event) => {
	for (let i = 1; i <= totalMinutes; ++i) {
		getSeconds();
	}
});
document.getElementById('reset-button').addEventListener('click', (event) => {
	document.getElementById('hour-container').innerText = 0;
	document.getElementById('minute-container').innerText = 0;
	document.getElementById('second-container').innerText = 0;

	//need to clear the scheduled events using setTimeout
	clearScheduledEvents();
	nextEvents = [];
});
