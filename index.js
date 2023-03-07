const mysql = require('mysql');
const express = require('express');

console.log("Hello World!");

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log(req);
  console.log(res);
})

app.post('/user', function (req, res) {
  res.send('Got a POST request');
  console.log(req);
  console.log(res);
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
  console.log(req);
  console.log(res);
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
  console.log(req);
  console.log(res);
});

app.listen("2023", () => {
  console.log(`Example app listening on port 2023!`)
})


// https://www.w3schools.com/nodejs/nodejs_mysql.asp
