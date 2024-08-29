import { LavaBody } from '#/type/LavaBody';

export type PayoffInfoGet = LavaBody & {
  shopId: string,
  orderId?: string,
  payoffId: string
}