const PIL2Operand = require("./Pil2Operand");

class PIL2ExpressionAdd {
    constructor(expression) {
        this.lhs = new PIL2Operand(expression.lhs);
        this.rhs = new PIL2Operand(expression.rhs);
    }

    toJson() {
        return {
            operation: 'add',
            lhs: this.lhs.toJson(),
            rhs: this.rhs.toJson()
        }
    }
}

class PIL2ExpressionSub {
    constructor(expression) {
        this.lhs = new PIL2Operand(expression.lhs);
        this.rhs = new PIL2Operand(expression.rhs);
    }

    toJson() {
        return {
            operation: 'sub',
            lhs: this.lhs.toJson(),
            rhs: this.rhs.toJson()
        }
    }
}

class PIL2ExpressionMul {
    constructor(expression) {
        this.lhs = new PIL2Operand(expression.lhs);
        this.rhs = new PIL2Operand(expression.rhs);
    }

    toJson() {
        return {
            operation: 'mul',
            lhs: this.lhs.toJson(),
            rhs: this.rhs.toJson()
        }
    }
}

class PIL2ExpressionNeg {
    constructor(expression) {
        this.value = new PIL2Operand(expression.value);
    }

    toJson() {
        return {
            operation: 'neg',
            value: this.value.toJson()
        }
    }
}

class PIL2Expression {
    constructor(id, expression) {
        this.id = id;

        const operationMap = {
            add: PIL2ExpressionAdd,
            sub: PIL2ExpressionSub,
            mul: PIL2ExpressionMul,
            neg: PIL2ExpressionNeg,
        };
          
        if (!operationMap.hasOwnProperty(expression.operation))
            throw new Error("Unknown operation: " + expression.operation);

        this.operation = new operationMap[expression.operation](expression);
    }

    toJson() {
        return this.operation.toJson();
    }
}

module.exports.PIL2Expression = PIL2Expression;
module.exports.PIL2ExpressionAdd = PIL2ExpressionAdd;
module.exports.PIL2ExpressionSub = PIL2ExpressionSub;
module.exports.PIL2ExpressionMul = PIL2ExpressionMul;
module.exports.PIL2ExpressionNeg = PIL2ExpressionNeg;

