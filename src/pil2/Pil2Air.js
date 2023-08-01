const PIL2Challenge = require("./Pil2Challenge.js");
const PIL2Stage = require("./Pil2Stage.js");
const PIL2Subproof = require("./Pil2Subproof.js");
const PIL2SubproofValue = require("./Pil2SubproofValue.js");

class PIL2AIR {
    constructor() {
        this.name = "PIL2AIR";
        this.Fr;

        // Proof values of the constraints
        this.numProofValues = 0;
        this.numPublicValues = 0; // Public inputs????

        this.subproofs = [];
        this.challenges = [];
        this.stages = [];
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

    addSubproofs(subproofs) {
        const _this = this;

        if (this.subproofs.length > 0)
            throw new Error("Subproofs already added");

        for (let i = 0; i < subproofs.length; i++) {
            addSubproof(subproofs[i]);
        }

        function addSubproof(subproof) {
            const subproofId = _this.numSubproofs;
            const aggregated = subproof.aggregated;
            const subproofValues = [];
            const airs = [];

            for (let i = 0; i < subproof.subProofValues.length; i++) {
                const subproofValue = new PIL2SubproofValue(subproof.subProofValues[i]);
                subproofValues.push(subproofValue);
            }

            const pil2Subproof = new PIL2Subproof(subproofId, aggregated, subproofValues, airs);

            _this.subproofs.push(pil2Subproof);
        }    
    }


    // Challenges is a vector of integers indicating the challenge for each stage
    addChallenges(challenges) {
        const _this = this;

        if (this.stages.length > 0 || this.challenges.length > 0)
            throw new Error("Challenges and stages already added");

        for (let i = 0; i < challenges.length; i++) {
            addChallenge(i, challenges[i]);
        }

        function addChallenge(stageId, numChallenges) {
            if(_this.stages.indexOf(stageId) >= 0)
                throw new Error(`Stage ${stageId} already added`);
    
            const stage = new PIL2Stage(stageId);
    
            for (let i = 0; i < numChallenges; i++) {
                const challengeId = _this.numChallenges;
                
                _this.challenges.push(new PIL2Challenge(challengeId, stageId));
    
                stage.addChallenge(_this.challenges[challengeId]);
            }
    
            _this.stages.push(stage);
        }
    }

    toJson() {
        return {
            name: this.name,
            primeR: this.Fr.p.toString(),
            numProofValues: this.numProofValues,
            numPublicValues: this.numPublicValues,
            challenges: this.stages.map(stage => stage.toJson()),
            subproofs: this.subproofs.map(subproof => subproof.toJson()),
        }
    }
}

module.exports = PIL2AIR;