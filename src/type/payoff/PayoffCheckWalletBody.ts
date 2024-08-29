import { LavaBody } from '#/type/LavaBody';

export type PayoffCheckWalletService = 'card_payoff' | 'qiwi_payoff' | 'lava_payoff' | 'steam_payoff';

export type PayoffCheckWalletBody = LavaBody & {
  walletTo: string,
  service: PayoffCheckWalletService,
  shopId: string,
  uuid: string
}