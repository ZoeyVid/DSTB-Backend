const mysql = require('mysql');
const config = require('./config.json');
let connection

module.exports = {
    connect: function() {
        console.log("Database module loaded!")
        connection = mysql.createConnection({
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.database
        });
        connection.connect(function(err) {
            if (err) {
                console.error("Error while connecting to database: " + err.stack);
                process.exit(5)
            }
            console.log("Database connected!");
            console.log(connection)
        });
    }
}

// https://www.w3schools.com/nodejs/nodejs_mysql.asp
