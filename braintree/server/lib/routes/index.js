// TODO: some kind of Routes config here?
module.exports = function(app) {
  return {
    clientToken: require('./client-token')(app),
    paymentMethods: require('./payment-methods')(app)
    // ...
  }
}
