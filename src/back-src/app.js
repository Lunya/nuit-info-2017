let express = require('express');
let path = require('path');
let http = require('http');
let bodyParser = require('body-parser');
let mysql = require('mysql2');
let fs = require('fs');
require('dotenv').config();

// create database if not exists
let bd = mysql.createConnection({
	host:		process.env.DB_SERVER_HOST,
	port:		process.env.DB_SERVER_PORT,
	user:		process.env.DB_SERVER_USER,
	password:	process.env.DB_SERVER_PASSWORD,
	charset:	'utf8'
});
bd.query(fs.readFileSync('./bdd/create.sql').toString());

// files included
let api = require('./api');

let app = express();

app.use(bodyParser.json());

// set static path for angular
app.use(express.static(path.join(__dirname, '../front-src/dist')));

// set API routes
app.use('/api', api);

// start server
let server = http.createServer(app);

server.listen(process.env.NODE_PORT,
	() => console.log(`Server running on localhost:${process.env.NODE_PORT}`));

