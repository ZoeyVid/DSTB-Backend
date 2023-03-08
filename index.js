const mysql = require('mysql');
const express = require('express');
const fs = require('node:fs');

console.log("Hello World!");

const app = express()

const apiFiles = fs
.readdirSync("./api")
.filter((file) => file.endsWith(".js"));

for (const file of apiFiles) {
  require(`./api/${file}`)(app);
}

app.listen("2023", () => {
  console.log(`Example app listening on port 2023!`)
})


// https://www.w3schools.com/nodejs/nodejs_mysql.asp
