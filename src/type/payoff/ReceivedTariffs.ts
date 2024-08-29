import { LavaResponse } from '#/type/LavaResponse';
import { PayoffTariff } from './PayoffTariff';

export type ReceivedTariffs = LavaResponse & {
  tariffs: PayoffTariff[]
};