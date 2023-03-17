const database = require("./database.js");

console.log("Create tables...");

createTables();

async function createTables() {
await database.connect();
console.log(await database.query("DROP TABLE IF EXISTS dstb_user"));
  // UserID, UserName, FirstName, LastName, Password-Hash, Account-Type
console.log(await database.query("CREATE TABLE IF NOT EXISTS dstb_user (id INT NOT NULL AUTO_INCREMENT, username VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, type VARCHAR(255), PRIMARY KEY (id))"));
database.query("INSERT INTO dstb_user (username, firstname, lastname, password, type) VALUES ('test', 'test', 'test', 'test', 'test')");
var test = await database.query("SELECT * FROM dstb_user");
console.log(test);
}
