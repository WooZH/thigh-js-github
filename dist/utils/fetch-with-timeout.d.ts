/// <reference types="lodash" />
declare const getFetchWithTimeout: ((timeout: number) => (url: string, opts: any) => Promise<Response>) & import("lodash").MemoizedFunction;
export default getFetchWithTimeout;
