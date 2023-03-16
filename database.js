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
    },
    query: async function(query) {
        return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) throw err;
            if (err) reject(err);
            if (!err) resolve(Object.values(JSON.parse(JSON.stringify(result))));
        })});
    },
    disconnect: async function() {
        await connection.end();
        console.log("Database disconnected!")
        process.exit(0)
    }
}

// https://www.w3schools.com/nodejs/nodejs_mysql.asp
