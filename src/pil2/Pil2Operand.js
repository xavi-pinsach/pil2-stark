class PIL2OperandConstant {
    constructor(expression) {
        this.operand = "constant";
        this.value = expression.value;
    }

    toJson() {
        return {operand: this.operand, value: this.value};
    }
}

class PIL2OperandChallenge {
    constructor(expression) {
        this.operand = "challenge";
        this.idx = expression.idx;
        this.stage = expression.stage;
    }

    toJson() {
        return {operand: this.operand, idx: this.idx, stage: this.stage};
    }
}

class PIL2OperandProofValue {
    constructor(expression) {
        this.operand = "proofValue";
        this.idx = expression.idx;
    }

    toJson() {
        return {operand: this.operand, idx: this.idx};
    }
}

class PIL2OperandSubproofValue {
    constructor(expression) {
        this.operand = "subproofValue";
        this.idx = expression.idx;
    }

    toJson() {
        return {operand: this.operand, idx: this.idx};
    }
}

class PIL2OperandPublicValue {
    constructor(expression) {
        this.operand = "publicValue";
        this.idx = expression.idx;
    }

    toJson() {
        return {operand: this.operand, idx: this.idx};
    }
}

class PIL2OperandPeriodicCol {
    constructor(expression) {
        this.operand = "periodicCol";
        this.idx = expression.idx;
        this.rowOffset = expression.rowOffset;
    }

    toJson() {
        return {operand: this.operand, idx: this.idx, rowOffset: this.rowOffset};
    }
}

class PIL2OperandFixedCol {
    constructor(expression) {
        this.operand = "fixedCol";
        this.idx = expression.idx;
        this.rowOffset = expression.rowOffset;
    }

    toJson() {
        return {operand: this.operand, idx: this.idx, rowOffset: this.rowOffset};
    }
}

class PIL2OperandWitnessCol {
    constructor(expression) {
        this.operand = "witnessCol";
        this.stage = expression.stage;
        this.colIdx = expression.colIdx;
        this.rowOffset = expression.rowOffset;
    }

    toJson() {
        return {operand: this.operand, 
            stage: this.stage, colIdx: this.colIdx, rowOffset: this.rowOffset};
    }
}

class PIL2OperandExpression {
    constructor(expression) {
        this.operand = "expression";
        this.idx = expression.idx;
    }

    toJson() {
        return {operand: this.operand, idx: this.idx};
    }
}

class PIL2Operand {
    constructor(expression) {
        const operandMap = {
            constant: PIL2OperandConstant,
            challenge: PIL2OperandChallenge,
            proofValue: PIL2OperandProofValue,
            subproofValue: PIL2OperandSubproofValue,
            publicValue: PIL2OperandPublicValue,
            periodicCol: PIL2OperandPeriodicCol,
            fixedCol: PIL2OperandFixedCol,
            witnessCol: PIL2OperandWitnessCol,
            expression: PIL2OperandExpression,
        };
          
        if (!operandMap.hasOwnProperty(expression.operand))
            throw new Error("Unknown operand: " + expression.operand);

        this.operand = new operandMap[expression.operand](expression);

    }

    toJson() {
        return this.operand.toJson();
    }
}

module.exports = PIL2Operand;