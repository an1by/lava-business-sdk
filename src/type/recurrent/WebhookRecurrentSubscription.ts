import { RecurrentStringStatus } from '!/recurrent/RecurrentSubscriptionStatus';

export type WebhookRecurrentSubscription = {
  type: number,
  product_id: string,
  consumer_id: string,
  order_id: string,
  subscription_id: string,
  invoice_id?: string,
  status: RecurrentStringStatus,
  activation_time?: string,
  deactivation_time?: string,
  deactivated_reason?: string,
  suspension_time?: string,
  next_pay_time?: string,
  amount?: string,
  payer_details?: string,
  is_refundable_payment?: boolean
}