module.exports = function(myApp) {
  myApp.router.get('/client_token', function (req, res) {
    myApp.gateway.clientToken.generate({}, function (err, response) {
      res.send(response.clientToken);
    });
  });
}
