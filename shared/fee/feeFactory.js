/*

Fee Factory, return the correct implementation based on event.

 */

import fees from './index';

const feeMatrix = {
    free:   {
        whole:   require('./free.js'),
        free:    require('./free.js'),
        presets: require('./free.js')
    },
    flat:   {
        whole:   require('./flat.js'),
        free:    require('./flat.js'),
        presets: require('./flat.js')
    },
    ealing: {
        whole:   require('./ealing.js'),
        free:    require('./ealing.js'),
        presets: require('./ealing.js')
    },
    big:    {
        whole:   require('./big.js'),
        free:    require('./big.js'),
        presets: require('./free.js')
    },
    vcamp:  {
        whole:   require('./free.js'),
        free:    require('./vcamp-free.js'),
        presets: require('./free.js')
    }
};

module.exports = (event) => {
    return feeMatrix[event.feeModel][event.partialDates];
};