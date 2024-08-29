import { LavaResponse } from '#/type/LavaResponse';
import { Tariff } from '../Tariff';

export type PayoffGetTariffs = LavaResponse & {
  tariffs: Tariff[]
};