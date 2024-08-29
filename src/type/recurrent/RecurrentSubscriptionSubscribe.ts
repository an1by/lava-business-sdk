import { LavaBody } from '#/type/LavaBody';

export type RecurrentSubscriptionSubscribe = LavaBody & {
  productId: string,
  consumerId: string,
  orderId: string,
  shopId: string
}