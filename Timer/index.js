let totalMinutes = 1, totalSeconds = 0;
let nextEvents = []

getSeconds = () => {
    let promises = [];
    for(let j = 1; j <= 10; ++j) {
        let promise = new Promise((resolve, reject) => {
            nextEvents.push(setTimeout(() => {
                document.getElementById('second-container').innerText = j;
                resolve(j)
            }, j * 1000))
        })
        promises.push(promise)
    }
    Promise.all(promises).then(res => {
        setTimeout(() => {
            alert('alert after all')
        }, 0)
    })
}

clearScheduledEvents = () => {
    for(let i = 0; i < nextEvents.length; ++i) {
        clearTimeout(nextEvents[i]);
    }
}

document.getElementById('start-button').addEventListener('click', (event) => {
    for(let i = 1; i <= totalMinutes; ++i) {
        getSeconds();
    }
})
document.getElementById('reset-button').addEventListener('click', (event) => {
    document.getElementById('minute-container').innerText = 0;
    document.getElementById('second-container').innerText = 0;

    //need to clear the scheduled events using setTimeout
    clearScheduledEvents();
    nextEvents = [];
})