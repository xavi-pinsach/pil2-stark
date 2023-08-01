class PIL2Subproof {
    constructor(id, aggregated, subProofValues, airs) {
        this.id = id;
        this.aggregated = aggregated;
        this.subProofValues = subProofValues;
        this.airs = airs;
    }

    get numSubProofValues() {
        return this.subProofValues.length;
    }

    get numAirs() {
        return this.airs.length;
    }

    toJson() {
        return {
            aggregated: this.aggregated,
            subProofValues: this.subProofValues.map(subProofValue => subProofValue.toJson()),
            // airs: this.a irs.map(air => air.toJson()),
        };
    }
}

module.exports = PIL2Subproof;
