import { LavaResponse } from '#/type/LavaResponse';

export type LavaAxiosResponseData<R extends LavaResponse> = {
  data: R
}