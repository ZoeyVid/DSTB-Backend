const mysql = require('mysql');
const http = require('http');

http
    .createServer((request, response) => {
      response.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.write(request);
      response.end();
    })
    .listen("2023");