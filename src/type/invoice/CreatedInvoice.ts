import { LavaResponse } from '#/type/LavaResponse';

export type CreatedInvoice = LavaResponse & {
  'id': string,
  'amount': number,
  'expired'?: string | null,
  'status': number,
  'shop_id': string,
  'url': string,
  'comment'?: string | null, // SUPPOSED
  'fail_url'?: string | null,
  'success_url'?: string | null,
  'hook_url'?: string | null,
  'custom_fields'?: string | null,
  'merchantName': string,
  'exclude_service'?: string[] | null,
  'include_service'?: string[] | null
}