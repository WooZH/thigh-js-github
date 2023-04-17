declare const conversionUtil: (value: any, { fromCurrency, toCurrency, fromNumericBase, toNumericBase, fromDenomination, toDenomination, numberOfDecimals, conversionRate, invertConversionRate, }: any) => any;
declare const addCurrencies: (a: any, b: any, options?: {}) => any;
declare const subtractCurrencies: (a: any, b: any, options?: any) => any;
declare const multiplyCurrencies: (a: any, b: any, options?: any) => any;
declare const conversionGreaterThan: ({ ...firstProps }: {
    [x: string]: any;
}, { ...secondProps }: {
    [x: string]: any;
}) => any;
declare const conversionLessThan: ({ ...firstProps }: {
    [x: string]: any;
}, { ...secondProps }: {
    [x: string]: any;
}) => any;
declare const conversionMax: ({ ...firstProps }: {
    [x: string]: any;
}, { ...secondProps }: {
    [x: string]: any;
}) => any;
declare const conversionGTE: ({ ...firstProps }: {
    [x: string]: any;
}, { ...secondProps }: {
    [x: string]: any;
}) => any;
declare const conversionLTE: ({ ...firstProps }: {
    [x: string]: any;
}, { ...secondProps }: {
    [x: string]: any;
}) => any;
declare const toNegative: (n: any, options?: {}) => any;
declare function decGWEIToHexWEI(decGWEI: any): any;
export { conversionUtil, addCurrencies, multiplyCurrencies, conversionGreaterThan, conversionLessThan, conversionGTE, conversionLTE, conversionMax, toNegative, subtractCurrencies, decGWEIToHexWEI, };
