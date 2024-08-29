import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { LavaConstants } from '#/constant/LavaConstants';
import * as crypto from 'node:crypto';
import { LavaBody } from '#/type/LavaBody';
import { LavaMethod } from '#/constant/LavaMethod';
import { LavaError } from '#/type/LavaError';
import { PayoffCreate } from '../type/payoff/PayoffCreate';
import { PayoffInfoGet } from '../type/payoff/PayoffInfoGet';
import { LavaResponse } from '#/type/LavaResponse';
import { CreatedPayoff } from '../type/payoff/CreatedPayoff';
import { LavaPromise } from '#/type/LavaPromise';
import { PayoffInfo } from '../type/payoff/PayoffInfo';
import { PayoffGetTariffs } from '../type/payoff/PayoffGetTariffs';
import { ReceivedTariffs } from '../type/payoff/ReceivedTariffs';
import { PayoffCheckWallet } from '../type/payoff/PayoffCheckWallet';
import { CheckedWallet } from '../type/payoff/CheckedWallet';
import { LavaAxiosResponseData } from '#/type/LavaAxiosResponseData';
import { InvoiceCreate } from '../type/invoice/InvoiceCreate';
import { CreatedInvoice } from '../type/invoice/CreatedInvoice';
import { InvoiceStatusGet } from '../type/invoice/InvoiceStatusGet';
import { InvoiceStatus } from '../type/invoice/InvoiceStatus';
import { InvoiceAvailableTariffs } from '../type/invoice/InvoiceTariff';
import { ShopIdGetter } from '../type/ShopIdGetter';
import { ShopBalance } from '../type/shop/ShopBalance';
import { RecurrentProductList } from '../type/recurrent/RecurrentProduct';
import { RecurrentConsumer } from '../type/recurrent/RecurrentConsumer';
import { RecurrentSubscriptionSubscribe } from '../type/recurrent/RecurrentSubscriptionSubscribe';
import { RecurrentSubscribedSubscription } from '../type/recurrent/RecurrentSubscribedSubscription';

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
      const axiosResponse: AxiosResponse<LavaAxiosResponseData<R>> = await this.axiosInstance.post(url, JSON.stringify(body), {
        headers: {
          'Signature': signature,
        },
      });
      return axiosResponse.data.data;
    } catch (error) {
      return error.response.data;
    }
  }

  public async createPayoff(body: PayoffCreate): LavaPromise<CreatedPayoff> {
    return this.execute(LavaMethod.PAYOFF_CREATE, body);
  }

  public async getPayoffInfo(body: PayoffInfoGet): LavaPromise<PayoffInfo> {
    return this.execute(LavaMethod.PAYOFF_INFO, body);
  }

  public async getPayoffTariffs(body: PayoffGetTariffs): LavaPromise<ReceivedTariffs> {
    return this.execute(LavaMethod.PAYOFF_GET_TARIFFS, body);
  }

  public async checkPayoffWallet(body: PayoffCheckWallet): LavaPromise<CheckedWallet> {
    return this.execute(LavaMethod.PAYOFF_CHECK_WALLET, body);
  }

  public async createInvoice(body: InvoiceCreate): LavaPromise<CreatedInvoice> {
    return this.execute(LavaMethod.INVOICE_CREATE, body);
  }

  public async getInvoiceStatus(body: InvoiceStatusGet): LavaPromise<InvoiceStatus> {
    return this.execute(LavaMethod.INVOICE_STATUS, body);
  }

  public async getAvailableInvoiceTariffs(body: ShopIdGetter): LavaPromise<InvoiceAvailableTariffs> {
    return this.execute(LavaMethod.INVOICE_GET_AVAILABLE_TARIFFS, body);
  }

  public async getShopBalance(body: ShopIdGetter): LavaPromise<ShopBalance> {
    return this.execute(LavaMethod.SHOP_GET_BALANCE, body);
  }

  public async getRecurrentProductList(body: ShopIdGetter): LavaPromise<RecurrentProductList> {
    return this.execute(LavaMethod.RECURRENT_PRODUCT_LIST, body);
  }

  public async createRecurrentConsumer(body: RecurrentConsumer): LavaPromise<RecurrentConsumer> {
    return this.execute(LavaMethod.RECURRENT_CONSUMER_CREATE, body);
  }

  public async subscribeRecurrentConsumer(body: RecurrentSubscriptionSubscribe): LavaPromise<RecurrentSubscribedSubscription> {
    return this.execute(LavaMethod.RECURRENT_SUBSCRIPTION_SUBSCRIBE, body);
  }
}