# Lava Business SDK
Don't use PHP, use Node.js.
## Installation
> npm i lava-business-sdk
---
## Documentation for [LavaBusinessClient](./src/client/LavaBusinessClient.ts)
> There are will be only links on [Lava Business API](https://dev.lava.ru/)
### Payoffs:
* [createPayoff](https://dev.lava.ru/business-payoff-create)
* [getPayoffInfo](https://dev.lava.ru/business-payoff-info)
* [getPayoffTariffs](https://dev.lava.ru/business-payoff-tariffs)
* [checkPayoffWallet](https://dev.lava.ru/business-payoff-wallet-check)

### Invoices:
* [createInvoice](https://dev.lava.ru/api-invoice-create)
* [getInvoiceStatus](https://dev.lava.ru/api-invoice-status)
* [getAvailableInvoiceTariffs](https://dev.lava.ru/api-invoice-services)
* [WebhookInvoice](https://dev.lava.ru/business-webhook)

### Shop:
* [getShopBalance](https://dev.lava.ru/shop-balance)

### Recurrent payments:
* [getRecurrentProductList](https://dev.lava.ru/recurrent-payments-product-list)
* [createRecurrentConsumer](https://dev.lava.ru/recurrent-payments-create-subscriber)
* [subscribeRecurrentSubscriptionConsumer](https://dev.lava.ru/recurrent-payments-create-subscription)
* [getRecurrentSubscriptionStatus](https://dev.lava.ru/recurrent-payments-status)
* [offsetNextPayTimeRecurrentSubscription](https://dev.lava.ru/recurrent-payments-offset-paytime)
* [unsubscribeRecurrentSubscriptionConsumer](https://dev.lava.ru/recurrent-payments-unsubscribe)
* [WebhookRecurrentSubscription](https://dev.lava.ru/recurrent-payments-webhook)