class PIL2GlobalOperandConstant {
    constructor(expression) {
        this.operand = "constant";
        this.value = expression.value;
    }

    toJson() {
        return {operand: this.operand, value: this.value};
    }
}

class PIL2GlobalOperandChallenge {
    constructor(expression) {
        this.operand = "challenge";
        this.idx = expression.idx;
        this.stage = expression.stage;
    }

    toJson() {
        return {operand: this.operand, idx: this.idx, stage: this.stage};
    }
}

class PIL2GlobalOperandProofValue {
    constructor(expression) {
        this.operand = "proofValue";
        this.idx = expression.idx;
    }

    toJson() {
        return {operand: this.operand, idx: this.idx};
    }
}

class PIL2GlobalOperandSubproofValue {
    constructor(expression) {
        this.operand = "subproofValue";
        this.subproofId = expression.subproofId;
        this.idx = expression.idx;
    }

    toJson() {
        return {operand: this.operand, subproofId: this.subproofId ,idx: this.idx};
    }
}

class PIL2GlobalOperandPublicValue {
    constructor(expression) {
        this.operand = "publicValue";
        this.idx = expression.idx;
    }

    toJson() {
        return {operand: this.operand, idx: this.idx};
    }
}

class PIL2GlobalOperandPublicTableAggregatedValue {
    constructor(expression) {
        this.operand = "publicTableAggregatedValue";
        this.idx = expression.idx;
    }

    toJson() {
        return {operand: this.operand, idx: this.idx};
    }
}

class PIL2GlobalOperandPublicTableColumn {
    constructor(expression) {
        this.operand = "publicTableColumn";
        this.idx = expression.idx;
        this.colIdx = expression.colIdx;
    }

    toJson() {
        return {operand: this.operand, idx: this.idx, colIdx: this.colIdx};
    }
}

class PIL2GlobalOperandExpression {
    constructor(expression) {
        this.operand = "expression";
        this.idx = expression.idx;
    }

    toJson() {
        return {operand: this.operand, 
            stage: this.stage, idx: this.idx};
    }
}

class PIL2GlobalOperand {
    constructor(expression) {
        const operandMap = {
            constant: PIL2GlobalOperandConstant,
            challenge: PIL2GlobalOperandChallenge,
            proofValue: PIL2GlobalOperandProofValue,
            subproofValue: PIL2GlobalOperandSubproofValue,
            publicValue: PIL2GlobalOperandPublicValue,
            publicTableAggregatedValue: PIL2GlobalOperandPublicTableAggregatedValue,
            publicTableColumn: PIL2GlobalOperandPublicTableColumn,
            expression: PIL2GlobalOperandExpression,
        };
          
        if (!operandMap.hasOwnProperty(expression.operand))
            throw new Error("Unknown global operand: " + expression.operand);

        this.operand = new operandMap[expression.operand](expression);

    }

    toJson() {
        return this.operand.toJson();
    }
}

module.exports.PIL2GlobalOperand = PIL2GlobalOperand;
module.exports.PIL2GlobalOperandExpression = PIL2GlobalOperandExpression;