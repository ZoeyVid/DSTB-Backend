module.exports = function(app) {
    app.put('/user/update', function (req, res) {
        res.send('Got a PUT request at /user');
      });
}