
const feeMatrix = {
    free:   {
        whole:   require('./free.js'),
        free:    require('./free.js'),
        presets: require('./free.js')
    },
    flat:         {
        whole:   require('./flat.js'),
        free:    require('./flat.js'),
        presets: require('./flat.js')
    },
    ealing:       {
        whole:   require('./ealing.js'),
        free:    require('./ealing.js'),
        presets: require('./ealing-cg.js'),
    },
    big:          {
        whole:   require('./big.js'),
        free:    require('./free.js'),
        presets: require('./big.js')
    },
    vcamp:        {
        whole:   require('./free.js'),
        free:    require('./vcamp-free.js'),
        presets: require('./free.js')
    },
    commonground: {
        whole:   require('./free.js'),
        free:    require('./free.js'),
        presets: require('./cg-preset.js')
    }
};

function getFeeModel(event) {
    return feeMatrix[event.feeModel][event.partialDates];
};


export default getFeeModel