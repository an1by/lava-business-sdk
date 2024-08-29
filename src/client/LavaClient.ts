import axios, { AxiosInstance } from 'axios';
import { LavaConstants } from '#/constant/LavaConstants';
import * as crypto from 'node:crypto';
import { LavaBody } from '#/type/LavaBody';
import { LavaMethod } from '#/constant/LavaMethod';
import { LavaError } from '#/type/LavaError';
import { PayoffCreateBody } from '../type/payoff/PayoffCreateBody';
import { PayoffInfoBody } from '../type/payoff/PayoffInfoBody';
import { LavaResponse } from '#/type/LavaResponse';
import { PayoffCreate } from '../type/payoff/PayoffCreate';
import { LavaPromise } from '#/type/LavaPromise';
import { PayoffInfo } from '../type/payoff/PayoffInfo';
import { PayoffGetTariffsBody } from '../type/payoff/PayoffGetTariffsBody';
import { PayoffGetTariffs } from '../type/payoff/PayoffGetTariffs';
import { PayoffCheckWalletBody } from '../type/payoff/PayoffCheckWalletBody';
import { PayoffCheckWallet } from '../type/payoff/PayoffCheckWallet';

export class LavaClient {
  private secretKey: string;
  private axiosInstance: AxiosInstance;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
    this.axiosInstance = axios.create({
      baseURL: LavaConstants.API_URL,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    this.axiosInstance.interceptors.response.use(
      response => response,
      error => {
        const lavaError: LavaError = error.response.data;
        return lavaError;
      },
    );
  }

  private async execute<B extends LavaBody, R extends LavaResponse>(method: LavaMethod, body: B): LavaPromise<R> {
    const url = LavaConstants.API_URL + method;

    const signature = crypto.createHmac('sha256', this.secretKey)
      .update(JSON.stringify(body))
      .digest('hex');

    try {
      const axiosResponse = await this.axiosInstance.post(url, JSON.stringify(body), {
        headers: {
          'Signature': signature,
        },
      });
      return axiosResponse.data as R;
    } catch (error) {
      return error.response.data;
    }
  }

  public async createPayoff(body: PayoffCreateBody): LavaPromise<PayoffCreate> {
    return this.execute(LavaMethod.PAYOFF_CREATE, body);
  }

  public async getPayoffInfo(body: PayoffInfoBody): LavaPromise<PayoffInfo> {
    return this.execute(LavaMethod.PAYOFF_INFO, body);
  }

  public async getPayoffTariffs(body: PayoffGetTariffsBody): LavaPromise<PayoffGetTariffs> {
    return this.execute(LavaMethod.PAYOFF_GET_TARIFFS, body);
  }

  public async checkPayoffWallet(body: PayoffCheckWalletBody): LavaPromise<PayoffCheckWallet> {
    return this.execute(LavaMethod.PAYOFF_CHECK_WALLET, body);
  }
}