class PIL2ConstraintFirstRow {
    constructor(expression) {
        this.constraint = "firstRow";
        this.expressionIdx = expression.expressionIdx;
        this.debugLine = expression.debugLine || "";
    }

    toJson() {
        let ret = {constraint: this.constraint, expressionIdx: this.expressionIdx};
        if (this.debugLine !== "") ret.debugLine = this.debugLine;
        return ret;
    }
}

class PIL2ConstraintLastRow {
    constructor(expression) {
        this.constraint = "lastRow";
        this.expressionIdx = expression.expressionIdx;
        this.debugLine = expression.debugLine || "";
    }

    toJson() {
        let ret = {constraint: this.constraint, expressionIdx: this.expressionIdx};
        if (this.debugLine !== "") ret.debugLine = this.debugLine;
        return ret;
    }
}

class PIL2ConstraintEveryRow {
    constructor(expression) {
        this.constraint = "everyRow";
        this.expressionIdx = expression.expressionIdx;
        this.debugLine = expression.debugLine || "";
    }

    toJson() {
        let ret = {constraint: this.constraint, expressionIdx: this.expressionIdx};
        if (this.debugLine !== "") ret.debugLine = this.debugLine;
        return ret;
    }
}

class PIL2ConstraintEveryFrame {
    constructor(expression) {
        this.constraint = "everyFrame";
        this.offsetMin = expression.offsetMin;
        this.offsetMax = expression.offsetMax;
        this.debugLine = expression.debugLine || "";
    }

    toJson() {
        let ret = {constraint: this.constraint, offsetMin: this.offsetMin, offsetMax: this.offsetMax};
        if (this.debugLine !== "") ret.debugLine = this.debugLine;
        return ret;
    }
}


class PIL2Constraint {
    constructor(expression) {
        const constraintMap = {
            firstRow: PIL2ConstraintFirstRow,
            lastRow: PIL2ConstraintLastRow,
            everyRow: PIL2ConstraintEveryRow,
            everyFrame: PIL2ConstraintEveryFrame
        };
          
        if (!constraintMap.hasOwnProperty(expression.constraint))
            throw new Error("Unknown constraint: " + expression.constraint);

        this.constraint = new constraintMap[expression.constraint](expression);
    }

    toJson() {
        return this.constraint.toJson();
    }
}

module.exports = PIL2Operand;