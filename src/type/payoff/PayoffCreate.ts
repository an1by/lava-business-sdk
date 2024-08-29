import { SubtractMethod } from '#/constant/SubtractMethod';

export type PayoffCreate = {
  amount: number,
  orderId: string,
  shopId: string,
  hookUrl?: string | null,
  service: string,
  walletTo?: string,
  subtract?: SubtractMethod
}