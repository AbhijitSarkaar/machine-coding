let hours = 0;
let minutes = 0;
let seconds = 0;
let nextEvents = [];

clearScheduledEvents = () => {
	for (let i = 0; i < nextEvents.length; ++i) {
		clearInterval(nextEvents[i]);
	}
};

document.getElementById('start-button').addEventListener('click', (event) => {
	nextEvents.push(
		setInterval(() => {
			seconds++;
			if (seconds === 60) {
				minutes++;
				if (minutes === 60) {
					hours++;
					document.getElementById('hour-container').innerText = hours;
					minutes = 0;
				}
				document.getElementById('minute-container').innerText = minutes;
				seconds = 0;
			}
			document.getElementById('second-container').innerText = seconds;
		}, 1000)
	);
});
document.getElementById('reset-button').addEventListener('click', (event) => {
	document.getElementById('hour-container').innerText = 0;
	document.getElementById('minute-container').innerText = 0;
	document.getElementById('second-container').innerText = 0;

	//need to clear the scheduled events using setTimeout
	clearScheduledEvents();
	nextEvents = [];
});
