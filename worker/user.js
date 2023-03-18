const { query } = require('../db');

module.exports = {
    userCreate: function() {
        return "Got a POST request"
    },
    user: function(username, password) {
        var data = query("SELECT * FROM dstb_user WHERE username = '" + username + "' AND password = '" + password + "'");
        return data;
    }
}