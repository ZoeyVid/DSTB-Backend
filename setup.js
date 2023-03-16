const database = require("./database.js");

console.log("Create tables...");

createTables();

async function createTables() {
await database.connect();
console.log(await database.query("CREATE TABLE IF NOT EXISTS dstb_user (test VARCHAR(255))"));
console.log(await database.query("SELECT * FROM information_schema.tables ORDER BY RAND() LIMIT 1"));
var test = await database.query("SELECT * FROM dstb_user");
console.log(test);
}