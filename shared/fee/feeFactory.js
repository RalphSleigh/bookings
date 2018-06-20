/*

Fee Factory, return the correct implementation based on event.

 */

import fees from './index';

const feeMatrix = {
    free:   {
        whole:   require('./free.js'),
        free:    require('./free.js'),
        partial: require('./free.js')
    },
    flat:   {
        whole:   require('./flat.js'),
        free:    require('./flat.js'),
        partial: require('./flat.js')
    },
    ealing: {
        whole:   require('./ealing.js'),
        free:    require('./ealing.js'),
        partial: require('./ealing.js')
    },
    big:    {
        whole:   require('./big.js'),
        free:    require('./big.js'),
        partial: require('./free.js')
    },
    vcamp:  {
        whole:   require('./free.js'),
        free:    require('./vcamp-free.js'),
        partial: require('./free.js')
    }
};

module.exports = (event) => {
    return feeMatrix[event.feeModel][event.partialDates];
};