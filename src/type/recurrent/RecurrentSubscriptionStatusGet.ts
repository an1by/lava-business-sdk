import { LavaBody } from '#/type/LavaBody';

export type RecurrentSubscriptionStatusGet = LavaBody & {
  subscriptionId?: string,
  orderId?: string,
  shopId: string
}