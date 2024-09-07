import { LavaBody } from '#/type/LavaBody';

export type OffsetNextPayTime = LavaBody & {
  subscriptionId?: string,
  orderId?: string,
  shopId: string,
  days: string // <= 365
}