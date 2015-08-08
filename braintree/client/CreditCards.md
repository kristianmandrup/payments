Credit cards
============

[Credit Cards docs](https://developers.braintreepayments.com/javascript+node/guides/credit-cards)

Set up braintree with the DOM ID of the form in which you are collecting card information. Make sure to replace `CLIENT-TOKEN-FROM-SERVER` with your generated client token.

`braintree.setup("CLIENT-TOKEN-FROM-SERVER", "custom", {id: "checkout"});`\`

```html
<form id="checkout" action="/your/server/endpoint" method="post">
  <input data-braintree-name="number" value="4111111111111111">
  <input data-braintree-name="cvv" value="100">

  <input data-braintree-name="expiration_date" value="10/20">

  <!-- you can also split expiration date into two fields -->
  <input data-braintree-name="expiration_month" value="10">
  <input data-braintree-name="expiration_year" value="2020">

  <input data-braintree-name="postal_code" value="94107">
  <input data-braintree-name="cardholder_name" value="John Smith">

  <input type="submit" id="submit" value="Pay">
</form>
```

For custom validation, we recommend using a lower-level integration. To do that, create a Braintree client and use it to tokenize card data:

```js
var client = new braintree.api.Client({clientToken: "CLIENT-TOKEN-FROM-SERVER"});

client.tokenizeCard({
  number: "4111111111111111",
  expirationDate: "10/20"
}, function (err, nonce) {
  // Send nonce to your server
});
```

[Tokenize card](http://www.forbes.com/sites/bruceupbin/2013/02/15/tokenization-and-the-collapse-of-the-credit-card-payment-model/)

### Testing cards

-	378282246310005 American Express
-	6011111111111117 Discover
-	3530111333300000 JCB
-	6304000000000000 Maestro
-	5555555555554444 Mastercard
-	4111111111111111 Visa

### Test failure

The following credit card numbers will simulate an unsuccessful card verification response. Note that verifying a card is different than creating a transaction. These card numbers will not simulate unsuccessful transactions; to trigger an unsuccessful transaction, adjust the amount of the transaction.

-	4000111111111115 Visa processor declined
-	5105105105105100 MasterCard processor declined
-	378734493671000 American Express processor declined
-	6011000990139424 Discover processor declined
-	3566002020360505 JCB failed (3000)

### Currencies

-	`​Presentment currency` The currency displayed to customers.
-	`Settlement currency` The currency in which funds will be deposited into your bank account.

### Payment methods for customers

```js
gateway.paymentMethod.create({
  customerId: "12345",
  paymentMethodNonce: nonceFromTheClient
}, function (err, result) { });
```

#### Credit card verification

If the payment method is a credit card, you can use options.verifyCard to ensure that Braintree attempts to verify that the credit card number matches a valid, open account.

```js
gateway.paymentMethod.create({
  customerId: "theCustomerId",
  paymentMethodNonce: nonceFromTheClient,
  options: {
    verifyCard: true,
    verificationMerchantAccountId: "theMerchantAccountId",
  }
}, function (err, result) {
});
```

Use the `makeDefault` option to set a payment method as the default for its customer:

```js
gateway.paymentMethod.update("theToken", {
  options: {
    makeDefault: true
  }
}, function (err, result) { });
```

Update the billing address:

```js
gateway.paymentMethod.update("theToken", {
  billingAddress: {
    streetAddress: "100 Maple Lane",
    options: {
      updateExisting: true
    }
  }
}, function (err, result) {
});
```

### transactions

Use the transaction API to:

-	Create a transaction using payment information, optionally saving a new customer at the same time
-	Find a transaction, or search for transactions that match specific criteria
-	Check a transaction's status
-	Submit a transaction for settlement to get paid
-	Void a transaction to cancel it before it settles
-	Refund a settled transaction to return funds to the customer
-	Retrieve disputes for a transaction

### Settlement

f you want to collect funds, you must submit transactions for settlement. You can do this in two ways:

When creating a transaction, using the options.submitForSettlement option. Separately, using `transaction.submitForSettlement()`:

```js
gateway.transaction.submitForSettlement("theTransactionId", function (err, result) {
});
```

The transaction must be authorized in order to settle.

Use `transaction.void()` to cancel a transaction before it is settled:

```js
gateway.transaction.void("theTransactionId", function (err, result) {
});
```

If the transaction is successfully voided, the result will return true. Otherwise, check for validation errors.

```js
if (result.success) {
  // transaction successfully voided
} else {
  // check errors
  console.log(result.message);
}
```

If you want to refund a customer for a transaction that has already settled, use transaction.refund():

```js
gateway.transaction.refund("theTransactionId", function (err, result) {
});
```

Use `transaction.find()` to look up a single transaction by its ID:

```js
gateway.transaction.find("theTransactionId", function (err, transaction) {
});
```

### Customers

[Customers](https://developers.braintreepayments.com/javascript+node/guides/customers)

Use customers to store and organize payment methods. A single customer can have multiple payment methods.

```js
gateway.customer.create({
  firstName: "Jen",
  lastName: "Smith",
  company: "Braintree",
  email: "jen@example.com",
  phone: "312.555.1234",
  fax: "614.555.5678",
  website: "www.example.com"
}, function (err, result) {
  result.success;
  // true

  result.customer.id;
  // e.g. 494019
});
```

You can also create a customer with an associated payment method:

```js
gateway.customer.create({
  firstName: "Charity",
  lastName: "Smith",
  paymentMethodNonce: nonceFromTheClient
}, function (err, result) {
  result.success;
  // true

  result.customer.id;
  // e.g 160923

  result.customer.paymentMethods[0].token;
  // e.g f28wm
});
```

Use customer.update() to update an existing customer:

```js
gateway.customer.update("theCustomerId", {
  firstName: "New First Name",
  lastName: "New Last Name"
}, function (err, result) {
});
```

Find customer

```js
gateway.customer.find("theCustomerId", function(err, customer) {
});
```
