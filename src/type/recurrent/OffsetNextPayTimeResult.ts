import { LavaResponse } from '#/type/LavaResponse';

export type OffsetNextPayTimeResult = LavaResponse & {
  'next_pay_time': string,
}