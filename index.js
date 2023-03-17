console.log("Hello World!");
const config = require("./config.json");

console.log("Load express module...");
require("./express.js")(config);

console.log("Load database module...");
const { connect } = require("./database.js")(config)
connect();