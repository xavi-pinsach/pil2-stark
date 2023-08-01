const { SYMBOLTYPES } = require('./Pil2Constants');

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
