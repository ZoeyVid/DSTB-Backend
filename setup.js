const database = require("./database.js");

console.log("Create tables...");

createTables();

async function createTables() {
await database.connect();
console.log(await database.query("CREATE TABLE IF NOT EXIST dstb_user (test VARCHAR(255))"));
console.log(await database.query("SELECT * FROM dstb_user"));
}