
const { AGGTYPES } = require('./Pil2Constants.js');

class PIL2SubproofValue {
    constructor(aggType) {
        if(!Object.values(AGGTYPES).includes(aggType))
            throw new Error('Invalid aggregation type');

        this.aggType = aggType;
    }

    toJson() {
        return this.aggType;
    }
}

module.exports = PIL2SubproofValue;