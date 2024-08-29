import { LavaBody } from '#/type/LavaBody';

export type PayoffInfoBody = LavaBody & {
  shopId: string,
  orderId?: string,
  payoffId: string
}