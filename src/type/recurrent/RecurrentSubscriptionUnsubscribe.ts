import { LavaBody } from '#/type/LavaBody';

export type RecurrentSubscriptionUnsubscribe = LavaBody & {
  subscriptionId?: string,
  orderId?: string,
  shopId: string
}