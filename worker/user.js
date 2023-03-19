const { query } = require('../database.js');
const { auth } = require('./user.js');

module.exports = {
    userCreate: function() {
        return "Got a POST request"
    },
    user: async function(username, password, id) {
        var authData = await auth(username, password);
        if (authData.length > 0) {
            if(authData[0].id == id || authData[0].type == "Admin" || authData[0].role == "teacher") {
                var data = await query("SELECT * FROM dstb_user WHERE id = '" + id + "'");
                return data;
            }
        }
    },
    auth: async function(username, password) {
        var data = await query("SELECT * FROM dstb_user WHERE username = '" + username + "' AND password = '" + password + "'");
        return data;
    }
}