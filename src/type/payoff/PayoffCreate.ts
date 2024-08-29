import { PayoffStatus } from './PayoffStatus';
import { LavaResponse } from '#/type/LavaResponse';


export type PayoffCreate = LavaResponse & {
  payoff_id: string,
  payoff_status: PayoffStatus
}