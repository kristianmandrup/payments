app.post('/payment-methods', function (req, res) {
  var nonce = req.body.payment_method_nonce;
  // Use payment method nonce here
});
