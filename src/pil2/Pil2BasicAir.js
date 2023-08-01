const { PIL2Expression } = require("./Pil2Expression");

class PIL2BasicAir {
    constructor(
        id,
        name,
        numRows,
        periodicCols,
        fixedCols,
        stageWidths,
        expressions,
        constraints
    ) {
        this.id = id;
        this.name = name;
        this.numRows = numRows;

        this.periodicCols = [];
        this.fixedCols = [];
        this.stageWidths = [];
        this.expressions = [];
        this.constraints = [];

        if (periodicCols !== undefined) this.addPeriodicCols(periodicCols);
        if (fixedCols !== undefined) this.addFixedCols(fixedCols);
        if (stageWidths !== undefined) this.addStageWidths(stageWidths);
        if (expressions !== undefined) this.addExpressions(expressions);
        //if (constraints !== undefined) this.addConstraints(constraints);
    }

    addPeriodicCols(periodicCols) {
        if (this.periodicCols.length > 0)
            throw new Error("Periodic columns already set");

        for (let i = 0; i < periodicCols.length; i++) {
            this.periodicCols[i] = periodicCols[i];
        }
    }

    addFixedCols(fixedCols) {
        if (this.fixedCols.length > 0)
            throw new Error("Fixes columns already set");

        for (let i = 0; i < fixedCols.length; i++) {
            this.fixedCols[i] = fixedCols[i];
        }
    }

    addStageWidths(stageWidths) {
        if (this.stageWidths.length > 0)
            throw new Error("Stage widths already set");

        for (let i = 0; i < stageWidths.length; i++) {
            this.stageWidths[i] = stageWidths[i];
        }
    }

    addExpressions(expressions) {
        if (this.expressions.length > 0)
            throw new Error("Expressions already added");

        for (let i = 0; i < expressions.length; i++) {
            this.addExpression(expressions[i]);
        }
    }

    addExpression(expression) {
        const expressionId = this.expressions.length;
        const pil2Expression = new PIL2Expression(expressionId, expression);

        this.expressions.push(pil2Expression);
    }

    toJson() {
        return {
            name: this.name,
            numRows: this.numRows,
            periodicCols: this.periodicCols.map(periodicCol => periodicCol),
            fixedCols: this.fixedCols.map(fixedCol => fixedCol),
            stageWidths: this.stageWidths.map(stageWidth => stageWidth),
            expressions: this.expressions.map(expression => expression.toJson()),
            constraints: this.constraints.map(constraint => constraint.toJson()),
        };
    }
}

module.exports = PIL2BasicAir;
