import { LavaResponse } from '#/type/LavaResponse';

export type InvoiceStatus = LavaResponse & {
  'status': string,
  'error_message'?: string | null, // SUPPOSED
  'id': string,
  'shop_id': string,
  'amount': number,
  'expire'?: string,
  'order_id'?: string,
  'fail_url'?: string | null,
  'success_url'?: string | null,
  'hook_url'?: string | null,
  'custom_fields'?: string | null,
  'include_service'?: string[] | null
}