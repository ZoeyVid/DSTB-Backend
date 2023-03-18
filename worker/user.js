const { query } = require('../database.js');

module.exports = {
    userCreate: function() {
        return "Got a POST request"
    },
    user: async function(username, password) {
        var data = await query("SELECT * FROM dstb_user WHERE username = '" + username + "' AND password = '" + password + "'");
        return data;
    }
}