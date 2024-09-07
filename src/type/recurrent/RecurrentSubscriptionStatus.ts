import { LavaResponse } from '#/type/LavaResponse';

export type RecurrentStringStatus = 'created' | 'suspended' | 'activated' | 'deactivated'

export type RecurrentCreatedStatus = {
  'subscriptionId': string,
  'orderId': string,
  'consumerId': string,
  'shopId': string,
  'productId': string,
  'status': RecurrentStringStatus,
  'amount': number,
};

export type RecurrentSuspendedStatus = {
  'subscriptionId': string,
  'orderId': string,
  'consumerId': string,
  'shopId': string,
  'productId': string,
  'status': RecurrentStringStatus,
  'amount': number,
  'activation_time': string,
  'last_pay_time': string,
  'next_pay_time': string,
  'payer_details': string
};

export type RecurrentActivatedStatus = RecurrentSuspendedStatus;

export type RecurrentDeactivatedStatus = {
  'subscriptionId': string,
  'orderId': string,
  'consumerId': string,
  'shopId': string,
  'productId': string,
  'status': RecurrentStringStatus,
  'amount': number,
  'activation_time': string,
  'last_pay_time': string,
  'deactivation_time': string,
  'deactivated_reason': string,
  'payer_details': string
};

export type RecurrentSubscriptionStatus =
  LavaResponse
  & (RecurrentCreatedStatus | RecurrentSuspendedStatus | RecurrentActivatedStatus | RecurrentDeactivatedStatus);