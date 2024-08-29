import { LavaResponse } from '#/type/LavaResponse';
import { LavaBody } from '#/type/LavaBody';

export type RecurrentConsumer = LavaResponse & LavaBody & {
  phone?: string,
  email: string,
  consumerId: string,
  shopId: string
}