console.log("Hello World!");

console.log("Load express module...");
require("./express.js")();

console.log("Load database module...");
const { connect } = require("./database.js");
connect();
