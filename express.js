const express = require('express')
const { userCreate } = require('./user')

module.exports = function() {
    console.log("Express module loaded!")
    const app = express()
    app.get('/', function(req, res) {
        res.send('Hello World!')
    })
    app.get('/user', function(req, res) {
        res.send('Got a GET request at /user')
    })
    app.post('/user/create', function(req, res) {
        res.send('Got a POST request')
        userCreate()
    })
    app.put('/user/update', function(req, res) {
        res.send('Got a PUT request at /user')
    })
    app.delete('/user/delete', function(req, res) {
        res.send('Got a DELETE request at /user')
    })
    app.listen("2023", () => {
        console.log(`Example app listening on port 2023!`)
      })
}