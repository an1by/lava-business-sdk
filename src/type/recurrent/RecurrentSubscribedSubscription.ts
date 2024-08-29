import { LavaResponse } from '#/type/LavaResponse';

export type RecurrentSubscribedSubscription = LavaResponse & {
  'subscriptionId': string,
  'amount': number,
  'expired'?: string | null,
  'url': string,
  'comment'?: string | null
}