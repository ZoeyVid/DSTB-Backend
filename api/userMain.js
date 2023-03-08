module.exports = function(app) {
    app.get('/user', function (req, res) {
        res.send('Got a GET request at /user');
      });
}