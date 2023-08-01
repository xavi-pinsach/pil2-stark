
const { AGGTYPES } = require('./Pil2Constants');

class PIL2SubproofValue {
    constructor(aggType) {
        if(aggType !== AGGTYPES.SUM && aggType !== AGGTYPES.PRODUCT)
            throw new Error('Invalid aggregation type');

        this.aggType = aggType;
    }

    toJson() {
        return this.aggType;
    }
}

module.exports = PIL2SubproofValue;