const express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

let data = [{a: 10}];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/api/test', (req, res) => {
	console.log('get');
	res.send(data);
});

/*
app.use('/', express.static('static'))

app.get('/', (req, res) => {
	console.log('get');
	res.send(data);
});

app.get('/add', (req, res) => {
	console.log('add');
	data.push({ data: req.query });
	res.send(data);
});

app.get('/clear', (req, res) => {
	console.log('clear');
	data = [];
	res.send(data);
});
*/

app.listen(port, host, () => console.log(`Example app listening at http://${host}:${port}`))
