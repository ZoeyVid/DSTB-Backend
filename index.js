console.log("Hello World!");
const config = require("./config.json");

console.log("Load express module...");
require("./express.js")();

console.log("Load database module...");
const { connect, query } = require("./database.js");
connect(config);
console.log("Ready!");

await query("DROP TABLE IF EXISTS dstb_user");
await query("CREATE TABLE IF NOT EXISTS dstb_user (id INT NOT NULL AUTO_INCREMENT, username VARCHAR(255) NOT NULL UNIQUE, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, type VARCHAR(255), PRIMARY KEY (id))")
await query("INSERT INTO dstb_user (username, firstname, lastname, password, type) VALUES ('" + config.credentials.username + "', 'Admin', 'Admin', 'test', 'Admin')");
await query("INSERT INTO dstb_user (username, firstname, lastname, password, type) VALUES ('Test', 'Test', 'Test', 'Test', 'Test')");
