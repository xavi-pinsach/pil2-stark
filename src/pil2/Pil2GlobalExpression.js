const { PIL2GlobalOperand } = require("./Pil2GlobalOperand.js");

class PIL2GlobalExpressionAdd {
    constructor(expression) {
        this.lhs = new PIL2GlobalOperand(expression.lhs);
        this.rhs = new PIL2GlobalOperand(expression.rhs);
    }

    toJson() {
        return {
            operation: 'add',
            lhs: this.lhs.toJson(),
            rhs: this.rhs.toJson()
        }
    }
}

class PIL2GlobalExpressionSub {
    constructor(expression) {
        this.lhs = new PIL2GlobalOperand(expression.lhs);
        this.rhs = new PIL2GlobalOperand(expression.rhs);
    }

    toJson() {
        return {
            operation: 'sub',
            lhs: this.lhs.toJson(),
            rhs: this.rhs.toJson()
        }
    }
}

class PIL2GlobalExpressionMul {
    constructor(expression) {
        this.lhs = new PIL2GlobalOperand(expression.lhs);
        this.rhs = new PIL2GlobalOperand(expression.rhs);
    }

    toJson() {
        return {
            operation: 'mul',
            lhs: this.lhs.toJson(),
            rhs: this.rhs.toJson()
        }
    }
}

class PIL2GlobalExpressionNeg {
    constructor(expression) {
        this.value = new PIL2GlobalOperand(expression.value);
    }

    toJson() {
        return {
            operation: 'neg',
            value: this.value.toJson()
        }
    }
}

class PIL2GlobalExpression {
    constructor(id, expression) {
        this.id = id;

        const operationMap = {
            add: PIL2GlobalExpressionAdd,
            sub: PIL2GlobalExpressionSub,
            mul: PIL2GlobalExpressionMul,
            neg: PIL2GlobalExpressionNeg,
        };
          
        if (!operationMap.hasOwnProperty(expression.operation))
            throw new Error("Unknown operation: " + expression.operation);

        this.operation = new operationMap[expression.operation](expression);
    }

    toJson() {
        return this.operation.toJson();
    }
}

module.exports.PIL2GlobalExpression = PIL2GlobalExpression;
module.exports.PIL2GlobalExpressionAdd = PIL2GlobalExpressionAdd;
module.exports.PIL2GlobalExpressionSub = PIL2GlobalExpressionSub;
module.exports.PIL2GlobalExpressionMul = PIL2GlobalExpressionMul;
module.exports.PIL2GlobalExpressionNeg = PIL2GlobalExpressionNeg;

