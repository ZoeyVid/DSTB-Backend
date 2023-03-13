const database = require("./database.js");

console.log("Create tables...");

createTables();

async function createTables() {
await database.connect();
await database.query("CREATE TABLE IF NOT EXISTS `users` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(255) NOT NULL, `password` VARCHAR(255) NOT NULL, `email` VARCHAR(255) NOT NULL, `co` VARCHAR(255) NOT NULL, `role` VARCHAR(255) NOT NULL, `parent` VARCHAR(255) NOT NULL, `teacher` VARCHAR(255) NOT NULL, `admin` VARCHAR(255) NOT NULL, PRIMARY KEY (`id`));");
var test = await database.query("SELECT count(*) FROM information_schema.TABLES WHERE TABLE_NAME = 'users'");
console.log(test);
await database.disconnect();
}