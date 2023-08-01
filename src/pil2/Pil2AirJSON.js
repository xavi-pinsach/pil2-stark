const PIL2AIR = require("./Pil2Air.js");
const { getCurveFromR } = require("ffjavascript");

class PIL2JSONAIR {
    static async getAIRFromJSON(json) {
        const requiredProperties = [
            "primeR",
            "numProofValues",
            "numPublicValues",
            "subproofs",
            "challenges",
        ];

        for (const property of requiredProperties) {
            if (!json.hasOwnProperty(property)) {
                throw new Error(`PIL2JSONAIR: Missing property ${property}`);
            }
        }

        const pil2AIR = new PIL2AIR();

        pil2AIR.name = json.name || "";

        const curve = await getCurveFromR(json.primeR);
        pil2AIR.Fr = curve.Fr;

        pil2AIR.numProofValues = json.numProofValues;
        pil2AIR.numPublicValues = json.numPublicValues;

        pil2AIR.addSubproofs(json.subproofs);
        pil2AIR.addChallenges(json.challenges);

        return pil2AIR;
    }
}

module.exports = PIL2JSONAIR;
