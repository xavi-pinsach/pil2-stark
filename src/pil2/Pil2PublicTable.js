const { AGGTYPES } = require("./Pil2Constants.js");

class PIL2PublicTable {
    constructor(id, numCols, maxRows, aggType, rowExpressionIdx) {
        this.id = id;
        this.numCols = numCols;
        this.maxRows = maxRows;

        if (!Object.values(AGGTYPES).includes(aggType))
            throw new Error("Invalid aggregation type");
        this.aggType = aggType;

        this.rowExpressionIdx = new PIL2GlobalOperandExpression(rowExpressionIdx);
    }

    toJson() {
        return {
            numCols: this.numCols,
            maxRows: this.maxRows,
            aggType: this.aggType.toJson(),
            rowExpressionIdx: this.rowExpressionIdx.toJson(),
        };
    }
}

module.exports = PIL2PublicTable;
