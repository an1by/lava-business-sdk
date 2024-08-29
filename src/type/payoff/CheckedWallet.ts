import { LavaResponse } from '#/type/LavaResponse';

export type CheckedWallet = LavaResponse & {
  status: boolean
}