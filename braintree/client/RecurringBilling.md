Recurring billing
=================

[Overview](https://articles.braintreepayments.com/guides/recurring-billing/overview)

With Braintree's recurring billing, you can charge your customers automatically in monthly increments.

Plans:

-	Define the billing cycle and default cost
-	Can be created for different services

Customers:

-	Include payment method
-	Can include personal details (e.g. address, email)
-	Can be linked to multiple subscriptions

Subscriptions:

-	Are funded by a specific payment method
-	Can be flexible and have different elements from the original plan

### Addons and Discounts

You can use add-ons to charge customers for additional features or services on top of the normal subscription price. Discounts are used to reduce the price of a subscription as part of a promotion or price break. Both of these options modify a subscription price for a specific customer without having to change the price of the base plan.

Add-ons and discounts can be applied manually on a case-by-case basis, or you can associate them with certain plans to apply them automatically to new subscriptions. For instance, if you’re running a promotion for $10 off a 6-month subscription, then you can associate a $10 discount with your 6-month plan for as long as the promotion is available.

### Trial periods

A trial period allows you to delay the time between the start date of a subscription and the first billing date. You can choose to apply trial periods on a case-by-case basis, or you can associate them with certain plans to apply them automatically to new subscriptions.

### Email notifications

Braintree can send email notifications to your customers for the following recurring billing events:

-	First Decline: Sent after the first unsuccessful attempt to charge a customer on a recurring billing cycle
-	First Retry: Sent after an automatic attempt to charge a customer if the initial transaction was unsuccessful
-	Second Retry: Sent after the next attempt to charge a customer if the first retry was unsuccessful
-	Past Due: Sent x days after the first decline. You can define x when you configure the Send options for your notifications.

### Automatic retries

If a customer’s payment method fails or is declined, their subscription status will change to Past Due. Automatic retries are your recurring billing backup plan—you can set up logic in the Control Panel to automatically retry a declined or failed charge at specific intervals.

### Proration

You can use proration to charge or credit a customer if a change is made to the subscription price in the middle of a billing cycle. Enabling proration adjusts the price based on when the change took place in the billing cycle, and it charges the customer the newly-calculated rate immediately. Without proration enabled, any changes made to a customer’s subscription mid-cycle will go into effect at the beginning of the next cycle.
