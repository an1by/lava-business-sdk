export enum LavaMethod {
  PAYOFF_CREATE = '/payoff/create',
  PAYOFF_INFO = '/payoff/info',
  PAYOFF_GET_TARIFFS = '/payoff/get-tariffs',
  PAYOFF_CHECK_WALLET = '/payoff/check-wallet',

  INVOICE_CREATE = '/invoice/create',
  INVOICE_STATUS = '/invoice/status',
  INVOICE_GET_AVAILABLE_TARIFFS = '/invoice/get-available-tariffs',

  SHOP_GET_BALANCE = '/shop/get-balance',

  RECURRENT_PRODUCT_LIST = '/recurrent/product/list',
  RECURRENT_CONSUMER_CREATE = '/recurrent/consumer/create',
  RECURRENT_SUBSCRIPTION_SUBSCRIBE = '/recurrent/subscription/subscribe',
  RECURRENT_SUBSCRIPTION_STATUS = '/recurrent/subscription/status',
  RECURRENT_SUBSCRIPTION_OFFSET_NEXT_PAY_TIME = '/recurrent/subscription/offset-next-pay-time',
  RECURRENT_SUBSCRIPTION_UNSUBSCRIBE = '/recurrent/subscription/unsubscribe',
}