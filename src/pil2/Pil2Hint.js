class PIL2Hint {
    constructor(id, name, hintFields, subproofId, airId) {
        this.id = id;
        this.name = name;
        this.hintFields = new PIL2HintFieldArray(hintFields);

        // TODO, but how to access to subproofs and airs? have we to pass them as parameters?
        // if (symbol.subproofId !== undefined && symbol.airId !== undefined) {
        //     const subproof = this.subproofs[symbol.subproofId];
        //     if (subproof == undefined)
        //         throw new Error(`Subproof ${symbol.subproofId} not found`);

        //     if (subproof.airs[symbol.airId] == undefined)
        //         throw new Error(
        //             `AIR ${symbol.airId} not found in subproof ${symbol.subproofId}`
        //         );
        // }

        this.subproofId = subproofId;
        this.airId = airId;
    }


    toJson() {
        let ret = {
            name: this.name,
            hintFields: this.hintFields.toJson(),
        };

        if (this.subproofId) ret.subproofId = this.subproofId;
        if (this.airId) ret.airId = this.airId;

        return ret;
    }
}

module.exports = PIL2Hint;
