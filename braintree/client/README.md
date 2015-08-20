payments-client
===============

Payments client for Braintree

[![Travis build status](http://img.shields.io/travis/kristianmandrup/payments-client.svg?style=flat)](https://travis-ci.org/kristianmandrup/payments-client)[![Code Climate](https://codeclimate.com/github/kristianmandrup/payments-client/badges/gpa.svg)](https://codeclimate.com/github/kristianmandrup/payments-client)[![Test Coverage](https://codeclimate.com/github/kristianmandrup/payments-client/badges/coverage.svg)](https://codeclimate.com/github/kristianmandrup/payments-client)[![Dependency Status](https://david-dm.org/kristianmandrup/payments-client.svg)](https://david-dm.org/kristianmandrup/payments-client)[![devDependency Status](https://david-dm.org/kristianmandrup/payments-client/dev-status.svg)](https://david-dm.org/kristianmandrup/payments-client#info=devDependencies)

Using [Client SDK](https://developers.braintreepayments.com/javascript+node/guides/client-sdk)

Ideally rewrite the Koa server code to ES2015 syntax.

`npm install --save braintree-web`

```js
var braintree = require("braintree-web");

braintree.setup("CLIENT-TOKEN-FROM-SERVER", "INTEGRATION-TYPE", options);
```

See [Paypal Merchant Account - developer](https://developer.paypal.com/docs/classic/admin/t)

Includes integrated shopping cart

See [Braintree node](https://github.com/braintree/braintree_node)

[Paynode](http://blog.james-carr.org/2010/09/26/paynode-more-payflow-api-methods-braintree-integration/)

[Paynode on github](https://github.com/jamescarr/paynode)

-	Paypal Payflow Pro
-	Authorize.net (AIM only)
-	Braintree
-	Chargify
-	...

[Paynode Docs](https://github.com/jamescarr/paynode/tree/master/docs)

[Sale Transactions](https://developers.braintreepayments.com/ios+ruby/reference/request/transaction/sale)

Node.js E-commerce

-	https://github.com/EastpointSoftware/traider.io/ (33) - http://traider.io/
-	https://github.com/reactioncommerce/reaction (833) - Meteor

[Kraken Shoppingcart example](https://github.com/krakenjs/kraken-example-with-shoppingcart)

```js
var braintree = require("paynode").use("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: 'your_merchant_id',
  publicKey: 'your_public_key',
  privateKey: 'your_private_key'
});

gateway.transaction.sale({
    'amount': '5.00',
    'creditCard': {
      'number': '5105105105105100',
      'expirationDate': '05/12'
    }
  },
  function (err, response) {
    // ...
  }
);
```

See [Client Guide](https://developers.braintreepayments.com/javascript+node/start/hello-client)

First request a client token from the server, via an Ajax GET request. F.ex use Axios or Superagent.

[Supragent vs Axios](http://www.sitepoint.com/comparison-javascript-http-libraries/)

"superagent has the most pleasant API in my opinion. But if you want promises, axios is your best bet."

Let's go for ES6 promises!!

```js
app.get("/client_token", function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
});
```

```js
function clientToken(cb) {
  axios
    .get('/client_token')
    .then(function(response) {
      cb(response.data);
    })
    .catch(function(response) {
      console.log('Error!');
    });  
}
```

Can be used sth. like this:

```js
clientToken().function(token) {
  braintree.setup(token, "custom", options);
})
```

Custom form
-----------

[Credit Cards docs](https://developers.braintreepayments.com/javascript+node/guides/credit-cards)

```html
<form id="checkout" action="/your/server/endpoint" method="post">
  <input data-braintree-name="number" value="4111111111111111">
  <input data-braintree-name="expiration_date" value="10/20">
  <input type="submit" id="submit" value="Pay">
</form>
```

Hosted fields
-------------

Better to use [Hosted fields](https://developers.braintreepayments.com/javascript+node/guides/hosted-fields/overview) even though still in Beta.

Benefits of using Hosted fields:

-	SAQ A Compliant (via Hosted Fields)
-	Create your own payment form using your existing styles and layout
-	Customize the behavior and experience of your checkout
-	Collect any customer information that you’d like
-	Localize/translate your checkout
-	Include PayPal button

[Setup](https://developers.braintreepayments.com/javascript+node/guides/hosted-fields/setup-and-integration)

To get started with your Hosted Fields integration, you will need to include a beta version of `braintree.js`

`https://js.braintreegateway.com/js/beta/braintree-hosted-fields-beta.18.js`

`braintree.setup(clientToken, "custom", options);`

### Configuration

[configuration](https://developers.braintreepayments.com/javascript+node/guides/hosted-fields/configuration)

### Styling

Can be done via stylesheet directly, as shown for `hosted-fields.html` and/or via `options` object as shown here.

```js
var colorTransition = "color 160ms linear";

braintree.setup(/* ... */, {
  hostedFields: {
    styles: {
      "input": {
        "color": "#3A3A3A",
        "transition": colorTransition,
        "-webkit-transition":
        colorTransition
      },
      ":focus": {
        color: "#333333"
      },
      ".invalid": {
        color: "#FF0000"
      }
    },
    number: {
      selector: "#card-number-input"
    },
    cvv: {
      selector: "#cvv-input"
    },
    // ...
  }
});
```

### Event handling

```js
// ...
hostedFields: {
  onFieldEvent: function (event) {
    if (event.type === "focus") {
      // Handle focus
    } else if (event.type === "blur") {
      // Handle blur
    } else if (event.type === "fieldStateChange") {
      // Handle a change in validation or card type
      console.log(event.isValid); // true|false
      if (event.card) {
        console.log(event.card.type);
        // visa|master-card|american-express|diners-club|discover|jcb|unionpay|maestro
      }
    }
  }
}
// ...
```

### Troubleshooting

`options.id` does not reference a valid DOM element Hosted Fields requires a valid `<form>` element to be specified as `options.id`.

`braintree.setup(/*...*/, "custom", { id: "my-form-id", hostedFields: { /*...*/ } });`
