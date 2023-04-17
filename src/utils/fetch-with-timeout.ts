import { memoize } from 'lodash';
import { fetch } from 'cross-fetch';

const getFetchWithTimeout = memoize((timeout: number) => {
  if (!Number.isInteger(timeout) || timeout < 1) {
    throw new Error('Must specify positive integer timeout.');
  }

  return async function _fetch(url: string, opts: any) {
    const abortController = new globalThis.AbortController();
    const { signal } = abortController;
    const f = fetch(url, {
      ...opts,
      signal,
    });

    const timer = setTimeout(() => abortController.abort(), timeout);

    try {
      const res = await f;
      clearTimeout(timer);
      return res;
    } catch (e) {
      clearTimeout(timer);
      throw e;
    }
  };
});

export default getFetchWithTimeout;
