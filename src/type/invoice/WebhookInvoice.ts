export type WebhookInvoice = {
  'invoice_id': string,
  'status': string,
  'pay_time': string,
  'amount': number,
  'order_id': string,
  'pay_service': string,
  'payer_details': string,
  'custom_fields'?: string | null,
  'credited': number
}