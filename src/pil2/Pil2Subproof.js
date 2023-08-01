const PIL2SubproofValue = require("./Pil2SubproofValue.js");
const PIL2BasicAir = require("./Pil2BasicAir.js");

class PIL2Subproof {
    constructor(id, aggregated, subproofValues, airs) {
        this.id = id;
        this.aggregated = aggregated;

        this.subproofValues = [];
        this.airs = [];

        if(subproofValues !== undefined) this.addSubproofValues(subproofValues);
        if(airs !== undefined) this.addAirs(airs);
    }

    get numSubProofValues() {
        return this.subproofValues.length;
    }

    get numAirs() {
        return this.airs.length;
    }

    addSubproofValues(subproofValues) {
        if (this.subproofValues.length > 0)
            throw new Error("Subproof values already added");

        for (let i = 0; i < subproofValues.length; i++) {
            this.addSubproofValue(subproofValues[i]);
        }
    }

    addSubproofValue(subproofValue) {
        const pil2SubproofValue = new PIL2SubproofValue(subproofValue);

        this.subproofValues.push(pil2SubproofValue);
    }

    addAirs(airs) {
        if (this.airs.length > 0)
            throw new Error("Airs already added");

        for (let i = 0; i < airs.length; i++) {
            this.addAir(airs[i]);
        }
    }

    addAir(air) {
        // airId inside de Subproof
        const airId = this.airs.length;
        const pil2BasicAir = new PIL2BasicAir(airId, air.name, air.numRows,
            air.periodicCols,
            air.fixedCols,
            air.stageWidths,
            air.expressions,
            air.constraints);

        this.airs.push(pil2BasicAir);
    }

    toJson() {
        return {
            aggregated: this.aggregated,
            subProofValues: this.subproofValues.map(subproofValue => subproofValue.toJson()),
            airs: this.airs.map(air => air.toJson()),
        };
    }
}

module.exports = PIL2Subproof;
