console.log("Hello World!");
const config = require("./config.json");

console.log("Load express module...");
require("./express.js")();

console.log("Load database module...");
const { connect, query } = require("./database.js");
connect(config);
console.log("Ready!");

query("INSERT INTO dstb_user (username, firstname, lastname, password, type) VALUES ('Test', 'Test', 'Test', 'Test', 'Test')");
