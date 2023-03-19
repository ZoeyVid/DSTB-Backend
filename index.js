console.log("Hello World!");
const config = require("./config.json");

console.log("Load express module...");
require("./express.js")();

console.log("Load database module...");
const { connect } = require("./database.js");
connect(config);
console.log("Ready!");
