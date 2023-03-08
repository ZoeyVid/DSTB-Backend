module.exports = function(app) {
    app.delete('/user/delete', function (req, res) {
        res.send('Got a DELETE request at /user');
      });
}