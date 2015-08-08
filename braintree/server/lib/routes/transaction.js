// TODO: What is the Koa way for doing request params?
app.get('/transaction/:amount', function (req, res) {
  var amount = req.amount;
  gateway.transaction.sale({
    amount: amount,
    paymentMethodNonce: nonceFromTheClient,
  }, function (err, result) {
    // TODO
  });
});
