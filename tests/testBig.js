const { utils } = require('../dist/index.cjs');

/**
 * BigNumber
 * usage
 */
const big_a = utils.BigNumber.from(1);
const big_b = utils.BigNumber.from(2);

console.log('BIG sum', big_b.add(big_a));
console.log('BIG diff', big_b.sub(big_a));

const example_a = big_a;
console.log('Returns true if and only if the value of BigNumber is equal to otherValue', example_a.eq(big_a));
console.log('convert example_a("BigNUmber 1") BigNumber to string', example_a.toNumber());
console.log('if the object is a BigNumber object', utils.BigNumber.isBigNumber(example_a));
