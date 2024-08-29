import { LavaError } from '#/type/LavaError';
import { LavaResponse } from '#/type/LavaResponse';

export type LavaPromise<R extends LavaResponse> = Promise<R | LavaError>