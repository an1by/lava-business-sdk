import { LavaResponse } from '#/type/LavaResponse';

export type RecurrentUnsubscribedSubscription = LavaResponse & {
  'unsubscribed': boolean
}