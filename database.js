const { query } = require('express');
const mysql = require('mysql');
const config = require('./config.json');
let connection

module.exports = {
    connect: async function() {
        console.log("Database module loaded!")
        connection = mysql.createConnection({
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.database
        });
        await connection.connect(function(err) {
            if (err) {
                console.error("Error while connecting to database: " + err.stack);
                process.exit(5)
            }
            console.log("Database connected!");
        });
        connection.query("SELECT * FROM information_schema.TABLES", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
        //console.log(await query("SELECT * FROM information_schema.TABLES"))
    },
    query: async function(query) {
        await connection.query(query, function (err, result, fields) {
            if (err) throw err;
            return result;
        });
    }
}

// https://www.w3schools.com/nodejs/nodejs_mysql.asp
