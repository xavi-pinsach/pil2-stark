const PIL2Challenge = require("./Pil2Challenge.js");
const PIL2Stage = require("./Pil2Stage.js");
const PIL2Subproof = require("./Pil2Subproof.js");
const PIL2SubproofValue = require("./Pil2SubproofValue.js");
const PIL2PublicTable = require("./Pil2PublicTable.js");
const PIL2GlobalExpression = require("./Pil2GlobalExpression.js");
const PIL2GlobalConstraint = require("./Pil2GlobalConstraint.js");
const PIL2Hint = require("./Pil2Hint.js");
const PIL2Symbol = require("./Pil2Symbol.js");
const { PIL2Expression } = require("./Pil2Expression.js");

class PIL2Out {
    constructor(name) {
        this.name = name || "";
        this.Fr;
        this.numProofValues = 0;
        this.numPublicValues = 0;
        this.subproofs = [];
        this.challenges = [];
        this.stages = [];
        this.publicTables = [];
        this.expressions = [];
        this.constraints = [];
        this.hints = [];
        this.symbols = [];
    }

    get numSubproofs() {
        return this.subproofs.length;
    }

    get numChallenges() {
        return this.challenges.length;
    }

    get numStages() {
        return this.stages.length;
    }

    get numPublicTables() {
        return this.publicTables.length;
    }

    get numExpressions() {
        return this.expressions.length;
    }

    get numConstraints() {
        return this.constraints.length;
    }

    get numHints() {
        return this.hints.length;
    }

    get numSymbols() {
        return this.symbols.length;
    }

    addSubproofs(subproofs) {
        if (this.subproofs.length > 0)
            throw new Error("Subproofs already added");

        for (let i = 0; i < subproofs.length; i++) {
            this.addSubproof(subproofs[i]);
        }
    }

    addSubproof(subproof) {
        const subproofId = this.numSubproofs;

        const pil2Subproof = new PIL2Subproof(
            subproofId,
            subproof.aggregated,
            subproof.subProofValues,
            subproof.airs
        );

        this.subproofs.push(pil2Subproof);
    }

    // Challenges is a vector of integers indicating the challenge for each stage
    addChallenges(challenges) {
        if (this.stages.length > 0 || this.challenges.length > 0)
            throw new Error("Challenges and stages already added");

        for (let i = 0; i < challenges.length; i++) {
            this.addChallenge(i, challenges[i]);
        }
    }

    addChallenge(stageId, numChallenges) {
        if (this.stages.indexOf(stageId) >= 0)
            throw new Error(`Stage ${stageId} already added`);

        const stage = new PIL2Stage(stageId);

        for (let i = 0; i < numChallenges; i++) {
            const challengeId = this.numChallenges;

            this.challenges.push(new PIL2Challenge(challengeId, stageId));

            stage.addChallenge(this.challenges[challengeId]);
        }

        this.stages.push(stage);
    }

    addSymbols(symbols) {
        if (this.symbols.length > 0) throw new Error("Symbols already added");

        for (let i = 0; i < symbols.length; i++) {
            this.addSymbol(symbols[i]);
        }
    }

    addSymbol(symbol) {
        if (symbol.subproofId !== undefined && symbol.airId !== undefined) {
            const subproof = this.subproofs[symbol.subproofId];
            if (subproof == undefined)
                throw new Error(`Subproof ${symbol.subproofId} not found`);

            if (subproof.airs[symbol.airId] == undefined)
                throw new Error(
                    `AIR ${symbol.airId} not found in subproof ${symbol.subproofId}`
                );
        }

        const pil2Symbol = new PIL2Symbol(
            symbol.id,
            symbol.name,
            symbol.type,
            symbol.dim,
            symbol.lengths,
            symbol.subproofId,
            symbol.airId,
            symbol.debugLine
        );

        this.symbols.push(pil2Symbol);
    }

    addPublicTables(publicTables) {
        if (this.publicTables.length > 0)
            throw new Error("Public tables already added");

        for (let i = 0; i < publicTables.length; i++) {
            this.addPublicTable(publicTables[i]);
        }
    }

    addPublicTable(publicTable) {
        const publicTableId = this.numPublicTables;
        const pil2PublicTable = new PIL2PublicTable(publicTableId, publicTable);

        this.publicTables.push(pil2PublicTable);
    }

    addExpressions(expressions) {
        if (this.expressions.length > 0)
            throw new Error("Expressions already added");

        for (let i = 0; i < expressions.length; i++) {
            this.addExpression(expressions[i]);
        }
    }

    addExpression(expression) {
        const expressionId = this.numExpressions;
        const pil2Expression = new PIL2GlobalExpression(expressionId, expression);

        this.expressions.push(pil2Expression);
    }

    addConstraints(constraints) {}

    addHints(hints) {}

    toJson() {
        return {
            name: this.name,
            primeR: this.Fr.p.toString(),
            numProofValues: this.numProofValues,
            numPublicValues: this.numPublicValues,
            challenges: this.stages.map((stage) => stage.toJson()),
            subproofs: this.subproofs.map((subproof) => subproof.toJson()),
            publicTables: this.publicTables.map((publicTable) =>
                publicTable.toJson()
            ),
            expressions: this.expressions.map((expression) =>
                expression.toJson()
            ),
            constraints: this.constraints.map((constraint) =>
                constraint.toJson()
            ),
            hints: this.hints.map((hint) => hint.toJson()),
            symbols: this.symbols.map((symbol) => symbol.toJson()),
        };
    }
}

module.exports = PIL2Out;
