declare function listenEvent(contractName: string, eventName: any, cb: (p: any) => void, positionHash?: string): Promise<void>;
declare function remove(contractName: string, eventName: any): Promise<void>;
export declare const eventListener: {
    on: typeof listenEvent;
    off: typeof remove;
};
export {};
