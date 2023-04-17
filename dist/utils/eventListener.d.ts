declare function listenEvent(contractName: string, eventName: any, cb: (p: any) => void, positionHash?: string): Promise<void>;
declare function remove(contractName: string, eventName: any): Promise<void>;
declare const _default: {
    on: typeof listenEvent;
    off: typeof remove;
};
export default _default;
