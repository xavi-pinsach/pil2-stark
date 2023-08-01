
class PIL2Operand {
    constructor(operand) {
        this.operand = operand;
    }

    toJson() {
        return this.operand;
    }
}

module.exports = PIL2Operand;
