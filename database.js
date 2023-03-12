const mysql = require('mysql');
const config = require('./config.json');
let connection

module.exports = {
    connect: function() {
        connection = mysql.createConnection({
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.database
        });
        connection.connect(function(err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log("Es geht");
        });
    }
}

// https://www.w3schools.com/nodejs/nodejs_mysql.asp
