const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use('/', (req, res) => {
	res.sendFile(__dirname + '/ToDoApp/index.html');
});

app.listen(5000, () => {
	console.log('listening to port 5000');
});
