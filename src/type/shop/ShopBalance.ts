import { LavaResponse } from '#/type/LavaResponse';

export type ShopBalance = LavaResponse & {
  balance: number,
  freeze_balance: number
}