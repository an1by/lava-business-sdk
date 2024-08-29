import { LavaResponse } from '#/type/LavaResponse';
import { PayoffStatus } from './PayoffStatus';

export type PayoffInfo = LavaResponse & {
  id: string,
  orderId: string | null,
  status: PayoffStatus,
  wallet: string,
  service: string,
  amountPay: number,
  commission: number,
  amountReceive: number,
  tryCount: number,
  errorMessage: never
}