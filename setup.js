const database = require("./database.js");

console.log("Create tables...");

createTables();

async function createTables() {
await database.connect();
console.log(await database.query("CREATE TABLE IF NOT EXISTS dstb_user (test VARCHAR(255))"));
console.log(await database.query("SELECT * FROM information_schema.tables ORDER BY RAND() LIMIT 1"));
database.query("INSERT INTO dstb_user (test) VALUES ('test')");
var test = await database.query("SELECT * FROM dstb_user");
console.log(test);
var test2 = await database.query("SELECT * FROM information_schema.tables");
console.log(test2[0].TABLE_NAME);
}