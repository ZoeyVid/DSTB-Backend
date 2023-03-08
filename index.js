const mysql = require('mysql');
const express = require('express');

console.log("Hello World!");

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', function (req, res) {
  res.send('Got a GET request at /user');
});

app.post('/user/create', function (req, res) {
  res.send('Got a POST request');
});

app.put('/user/update', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/user/delete', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.listen("2023", () => {
  console.log(`Example app listening on port 2023!`)
})


// https://www.w3schools.com/nodejs/nodejs_mysql.asp
