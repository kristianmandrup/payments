module.exports = function(app) {
  app.router.get('/transaction/:amount', function (req, res) {
    var amount = this.params.amount;
    var nonceFromTheClient = '???'; // TODO: get from params!!!?
    gateway.transaction.sale({
      amount: amount,
      paymentMethodNonce: nonceFromTheClient,
    }, function (err, result) {
      // TODO
    });
  });
}
