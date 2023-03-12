const express = require('express')
const { userCreate } = require('./user')

module.exports = async function() {
    console.log("Express module loaded!")
    const app = express()
    app.get('/', function(req, res) {
        res.send('Hello World!')
    })
    app.get('/user', function(req, res) {
        // Returns data of a user, Requires user id, must the user self, the parents, a teacher or an admin
        res.send('Got a GET request at /user')
    })
    app.post('/user/create', async function(req, res) {
        // Creates a new user, Requires Name and co, must be an admin
        var response = await userCreate()
        res.send(response)
    })
    app.put('/user/update', function(req, res) {
        // Update a user, Requires data to be updated, must be the user self(some), the parents(some), or an admin
        res.send('Got a PUT request at /user')
    })
    app.delete('/user/delete', function(req, res) {
        // Delete a user, Requires user id, must be an admin
        res.send('Got a DELETE request at /user')
    })
    app.get('/user/list', function(req, res) {
        // List all users, Requires nothing, must be an teacher or an admin
        res.send('Got a GET request at /user/list')
    })
    app.listen("2023", () => {
        console.log(`Example app listening on port 2023!`)
      })
}
