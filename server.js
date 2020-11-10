const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use('/', express.static('ToDoApp')); //to serve static files from ./ToDoApp directory

app.listen(5000, () => {
	console.log('listening to port 5000');
});
