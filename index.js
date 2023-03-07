const mysql = require('mysql');
const express = require('express');

console.log("Hello World!");

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen("2023", () => {
  console.log(`Example app listening on port ${port}`)
})


// https://www.w3schools.com/nodejs/nodejs_mysql.asp
