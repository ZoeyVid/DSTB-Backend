const mysql = require('mysql');
const http = require('http');

console.log("Hello World!");

http
    .createServer((request, response) => {
      response.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.write(request);
      response.end();
    })
    .listen("2023");

console.log("The Server is running at Port 2023");

// https://www.w3schools.com/nodejs/nodejs_mysql.asp
