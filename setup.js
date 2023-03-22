const database = require("./database.js");
const config = require("./config.json");

console.log("Create tables...");

createTables();

async function createTables() {
await database.connect(config);
await database.query("DROP TABLE IF EXISTS dstb_user");
// UserID, UserName, FirstName, LastName, Password-Hash, Account-Type
await database.query("CREATE TABLE IF NOT EXISTS dstb_user (id INT NOT NULL AUTO_INCREMENT, username VARCHAR(255) NOT NULL UNIQUE, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, type VARCHAR(255), PRIMARY KEY (id))")
// Hash Password in the future
database.query("INSERT INTO dstb_user (username, firstname, lastname, password, type) VALUES ('" + config.credentials.username + "', 'Admin', 'Admin', 'test', 'Admin')");
var test = await database.query("SELECT * FROM dstb_user");
console.log(test);
}
