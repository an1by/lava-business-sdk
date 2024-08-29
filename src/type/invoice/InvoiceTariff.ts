import { LavaResponse } from '#/type/LavaResponse';

export type InvoiceTariff = {
  'percent': number,
  'user_percent': number,
  'shop_percent': number,
  'service_name': string,
  'service_id': string,
  'status': number
};

export type InvoiceAvailableTariffs = LavaResponse & InvoiceTariff[];