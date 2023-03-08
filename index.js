const mysql = require('mysql');
const express = require('express');

console.log("Hello World!");

const app = express()

app.get('/', require('./api/main.js'));
app.get('/user', require('./api/user.js'));
app.post('/user/create', require('./api/userCreate.js'));
app.put('/user/update', require('./api/userUpdate.js'));
app.delete('/user/delete', require('./api/userDelete.js'));

app.listen("2023", () => {
  console.log(`Example app listening on port 2023!`)
})


// https://www.w3schools.com/nodejs/nodejs_mysql.asp
