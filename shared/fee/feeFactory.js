/*

Fee Factory, return the correct implementation based on event.

 */

import fees from './index';

module.exports = (event) => {

    try {
        return fees[event.feeModel];
    }
    catch (e) {
        console.log(`Failed to find feeModel ${event.feeModel}`);
        return fees.free;
    }

};