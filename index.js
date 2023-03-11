console.log("Hello World!");

console.log("Load express module...");
require("./worker/express.js")();

console.log("Load database module...");
//const { connect } = require("./worker/database.js");
//connect();