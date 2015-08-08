module.exports = function(app) {
  app.router.get('/client_token', function (req, res) {
    app.gateway.clientToken.generate({}, function (err, response) {
      res.send(response.clientToken);
    });
  });
}
