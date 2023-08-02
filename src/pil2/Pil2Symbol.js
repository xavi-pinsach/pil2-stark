const SYMBOLTYPES = {
    IM_COL: 0,
    FIXED_COL: 1,
    PERIODIC_COL: 2,
    WITNESS_COL: 3,
    PROOF_VALUE: 4,
    SUBPROOF_VALUE: 5,
    PUBLIC_VALUE: 6,
    PUBLIC_TABLE: 7,
    CHALLENGE: 8,
};

class PIL2Symbol {
    constructor(id, name, type, dim, lengths, subproofId, airId, debugLine) {
        this.id = id;
        this.name = name;

        if(!Object.values(SYMBOLTYPES).includes(type))
            throw new Error('Invalid symbol type');
        this.type = type;

        this.dim = dim;
        this.lengths = lengths;
        this.subproofId = subproofId;
        this.airId = airId;
        this.debugLine = debugLine;
    }

    toJson() {
        let ret = {
            id: this.id,
            name: this.name,
            type: this.type,
            dim: this.dim,
            lengths: this.lengths
        }
        if(this.subproofId) ret.subproofId = this.subproofId;
        if(this.airId) ret.airId = this.airId;
        if(this.debugLine) ret.debugLine = this.debugLine;

        return ret;
    }
}

module.exports = PIL2Symbol;
