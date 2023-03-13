const database = require("./database.js");

console.log("Create tables...");

createTables();

async function createTables() {
await database.connect();
console.log(await database.query("CREATE TABLE IF NOT EXIST dstb_user (id INT(11) NOT NULL AUTO_INCREMENT, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, deactivateted boolean NOT NULL DEFAULT 0, PRIMARY KEY (id))"));
}