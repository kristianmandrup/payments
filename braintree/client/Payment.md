### Payment

[Payment API](https://www.2checkout.com/documentation/payment-api)

With 2Checkout’s Payment API, buyers can place sales directly on your website, with no redirection to our checkout. You can take credit card information with a simple HTML form, and use our 2co.js JavaScript library to convert the credit card information into a secure token. The token can then be safely passed to your server so that you can submit the transaction using our API.

Our Standard Checkout option provides a complete checkout solution that can handle every part of the buyer’s checkout process on a single page. You can tailor the whole checkout process to your needs by passing in billing/shipping information, currency, language and checkout step.

You can use the ‘purchase_step’ parameter to set the purchase step that the buyer will land on when being directed to the checkout page. Possible values are ‘review-cart’, ‘shipping-information’, ‘shipping-method’, ‘billing-information’ and ‘payment-method’.

Inline Checkout is our iframe checkout option which displays a secure payment form as an overlay on your checkout page. It is designed to function when the buyer’s billing/shipping address has been collected and the cart total has been finalized. This makes it ideal for use with shopping cart applications or your own custom checkout process.

After the successful completion of a sale 2Checkout.com can return the buyer and sale parameters to a script or page on your site. Specifying an approved URL at the account level will direct all buyers to the same URL after a successful checkout. This URL can be entered on the Site Management page by clicking the Account tab followed by the Site Management sub-category.
