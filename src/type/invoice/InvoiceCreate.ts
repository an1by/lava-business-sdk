import { LavaBody } from '#/type/LavaBody';

export type InvoiceCreate = LavaBody & {
  sum: number,
  orderId: string | number,
  shopId: string,
  hookUrl?: string | null,
  failUrl?: string | null,
  successUrl?: string | null,
  expire?: number,
  customFields?: string,
  comment?: string,
  includeService?: string[],
  excludeService?: string[]
}