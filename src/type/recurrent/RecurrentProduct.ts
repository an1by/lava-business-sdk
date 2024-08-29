import { SubscriptionPeriod } from './SubscriptionPeriod';
import { LavaResponse } from '#/type/LavaResponse';

export type RecurrentProduct = {
  'id': string,
  'name': string,
  'price': number,
  'period': SubscriptionPeriod,
  'periodDays': number,
  'freeDays': number,
  'description': string | null, // SUPPOSED
  'shopId': string,
  'isActive': boolean,
  'activeCount': number,
  'inactiveCount': number,
  'subscribersCount': number
};

export type RecurrentProductList = LavaResponse & RecurrentProduct[]; // SUPPOSED