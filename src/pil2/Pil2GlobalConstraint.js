const { PIL2GlobalOperandExpression } = require("./Pil2GlobalOperand.js");

class PIL2GlobalConstraint {
    constructor(id, expression) {
        this.id = id;
        this.expressionIdx = new PIL2GlobalOperandExpression(expression.expressionIdx);
        this.debugLine = expression.debugLine;
    }

    toJson() {
        return {
            expressionIdx: this.expressionIdx.toJson(),
            debugLine: this.debugLine
        }
    }
}

module.exports = PIL2GlobalConstraint;