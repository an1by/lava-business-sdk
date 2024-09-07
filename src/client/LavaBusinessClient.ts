import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { LavaConstants } from '#/constant/LavaConstants';
import * as crypto from 'node:crypto';
import { LavaBody } from '#/type/LavaBody';
import { LavaMethod } from '#/constant/LavaMethod';
import { LavaError } from '#/type/LavaError';
import { PayoffCreate } from '!/payoff/PayoffCreate';
import { PayoffInfoGet } from '!/payoff/PayoffInfoGet';
import { LavaResponse } from '#/type/LavaResponse';
import { CreatedPayoff } from '!/payoff/CreatedPayoff';
import { LavaPromise } from '#/type/LavaPromise';
import { PayoffInfo } from '!/payoff/PayoffInfo';
import { PayoffGetTariffs } from '!/payoff/PayoffGetTariffs';
import { ReceivedTariffs } from '!/payoff/ReceivedTariffs';
import { PayoffCheckWallet } from '!/payoff/PayoffCheckWallet';
import { CheckedWallet } from '!/payoff/CheckedWallet';
import { LavaAxiosResponseData } from '#/type/LavaAxiosResponseData';
import { InvoiceCreate } from '!/invoice/InvoiceCreate';
import { CreatedInvoice } from '!/invoice/CreatedInvoice';
import { InvoiceStatusGet } from '!/invoice/InvoiceStatusGet';
import { InvoiceStatus } from '!/invoice/InvoiceStatus';
import { InvoiceAvailableTariffs } from '!/invoice/InvoiceTariff';
import { ShopIdGetter } from '!/ShopIdGetter';
import { ShopBalance } from '!/shop/ShopBalance';
import { RecurrentProductList } from '!/recurrent/RecurrentProduct';
import { RecurrentConsumer } from '!/recurrent/RecurrentConsumer';
import { RecurrentSubscriptionSubscribe } from '!/recurrent/RecurrentSubscriptionSubscribe';
import { RecurrentSubscribedSubscription } from '!/recurrent/RecurrentSubscribedSubscription';
import { RecurrentSubscriptionStatusGet } from '!/recurrent/RecurrentSubscriptionStatusGet';
import { RecurrentSubscriptionStatus } from '!/recurrent/RecurrentSubscriptionStatus';
import { OffsetNextPayTime } from '!/recurrent/OffsetNextPayTime';
import { OffsetNextPayTimeResult } from '!/recurrent/OffsetNextPayTimeResult';
import { RecurrentUnsubscribedSubscription } from '!/recurrent/RecurrentUnsubscribedSubscription';
import { RecurrentSubscriptionUnsubscribe } from '!/recurrent/RecurrentSubscriptionUnsubscribe';

export class LavaBusinessClient {
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

  public async subscribeRecurrentSubscriptionConsumer(body: RecurrentSubscriptionSubscribe): LavaPromise<RecurrentSubscribedSubscription> {
    return this.execute(LavaMethod.RECURRENT_SUBSCRIPTION_SUBSCRIBE, body);
  }

  public async getRecurrentSubscriptionStatus(body: RecurrentSubscriptionStatusGet): LavaPromise<RecurrentSubscriptionStatus> {
    return this.execute(LavaMethod.RECURRENT_SUBSCRIPTION_STATUS, body);
  }

  public async offsetNextPayTimeRecurrentSubscription(body: OffsetNextPayTime): LavaPromise<OffsetNextPayTimeResult> {
    return this.execute(LavaMethod.RECURRENT_SUBSCRIPTION_OFFSET_NEXT_PAY_TIME, body);
  }

  public async unsubscribeRecurrentSubscriptionConsumer(body: RecurrentSubscriptionUnsubscribe): LavaPromise<RecurrentUnsubscribedSubscription> {
    return this.execute(LavaMethod.RECURRENT_SUBSCRIPTION_UNSUBSCRIBE, body);
  }
}