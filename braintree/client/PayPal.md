PayPal
======

-	[PayPal guide](https://developers.braintreepayments.com/javascript+node/guides/paypal/overview)
-	[Client side](https://developers.braintreepayments.com/javascript+node/guides/paypal/client-side)

See `public/paypal.html`

Go for it!!!

PayPal
------

Customers will click a PayPal button—designed exclusively for Braintree merchants—and they’ll be prompted to enter their PayPal credentials in a new window or lightbox.

[Overview](https://articles.braintreepayments.com/guides/paypal/overview)

In order to accept PayPal, you must use Braintree as your merchant account provider. If you are only using the Braintree gateway, your account is not eligible to accept PayPal. Contact our Accounts team for more information.

### Merchant account

A merchant account is not a bank account—it's what we use to route funds from your customers’ accounts to your bank account. A merchant account is similar to a line of credit, so you’ll need to fill out an application. Once approved, you can begin accepting payments from customers.

Braintree offers merchant accounts, but if you already have one, it’s possible that you can continue to use it with Braintree’s gateway.

### Vault (recurring payments)

[Vault](https://developers.braintreepayments.com/javascript+node/guides/paypal/vault)

Enable the Vault flow by leaving out the `singleUse` client option or setting it to `false`

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <form id="merchant-form" action="/create-transaction" method="post">
      <div id="paypal-container"></div>
      <input type="submit" value="Submit" />
    </form>
    <script type="text/javascript" src="https://js.braintreegateway.com/v2/braintree.js"></script>
    <script type="text/javascript">
    braintree.setup("CLIENT-TOKEN-FROM-SERVER", "paypal", {
      container: "paypal-container",
      singleUse: false,
      onPaymentMethodReceived: function (obj) {
        doSomethingWithTheNonce(obj.nonce);
      }
    });
    </script>
  </body>
</html>
```

### Shipping Address : Checkout

To collect a shipping address from the Checkout with PayPal flow, use the client option `enableShippingAddress`. This will display a shipping address selector to your customer in the PayPal pop-up.

When `enableShippingAddress` is set to `true`, you can also choose to pass a shipping address that you have already collected. To display an existing address in the Checkout with PayPal flow, include the `address` in the `shippingAddressOverride` client option. If you pass `editable: false` in the `shippingAddressOverride` client option, the user will not be able to edit the shipping information in the Checkout with PayPal pop-up. Here’s an example:

```html
<script type="text/javascript">
braintree.setup("CLIENT-TOKEN-FROM-SERVER", "paypal", {
  container: "paypal-container",
  singleUse: true,
  amount: 10.00,
  currency: 'USD',
  enableShippingAddress: 'true',
  shippingAddressOverride: {
    recipientName: 'Scruff McGruff',
    type: 'Personal',
    streetAddress: '1234 Main St.',
    extendedAddress: 'Unit 1',
    locality: 'Chicago',
    countryCodeAlpha2: 'US',
    postalCode: '60652',
    region: 'IL',
    phone: '123.456.7890',
    editable: false
  },
  onPaymentMethodReceived: function (obj) {
    doSomethingWithTheNonce(obj.nonce);
  }
});
</script>
```

### Recurring billing

Use the `recurring` parameter to indicate that the PayPal transaction is created from a Vault record for a recurring subscription or an automatic top-up charge:

```js
gateway.transaction.sale({
  amount: "1000.00",
  paymentMethodToken: "theToken",
  recurring: true
}, function() {});
```

### One touch

One Touch makes buying experiences for mobile and web faster and easier. It lets your customers seamlessly pay with PayPal or Venmo through your mobile app or website without having to re-enter their login and payment information.

[One touch](https://articles.braintreepayments.com/guides/one-touch)

### Fraud detection

Braintree has partnered with *Kount* and PayPal to provide advanced fraud tools that run a series of fraud prevention and detection checks before a transaction or verification is processed. This helps you catch fraudulent activity before the request ever reaches the customer's bank.

[Basic Fraud tools](https://articles.braintreepayments.com/guides/fraud-tools/basic)

[Risk threshold rules](https://articles.braintreepayments.com/guides/fraud-tools/risk-threshold-rules)
