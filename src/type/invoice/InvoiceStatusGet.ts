import { LavaBody } from '#/type/LavaBody';

export type InvoiceStatusGet  = LavaBody & {
  shopId: string,
  invoiceId?: string,
  orderId?: string
}