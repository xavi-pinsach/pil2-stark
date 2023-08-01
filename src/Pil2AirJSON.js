const PIL2AIR = require("./pil2/Pil2Out.js");
const { getCurveFromR } = require("ffjavascript");

async function getAIRFromJSON(json) {
    const requiredProperties = [
        "primeR",
        "numProofValues",
        "numPublicValues",
        "subproofs",
        "challenges",
        "publicTables",
        "expressions",
        "constraints",
        "hints",
        "symbols"
    ];

    for (const property of requiredProperties) {
        if (!json.hasOwnProperty(property)) {
            throw new Error(`PIL2JSONAIR: Missing property ${property}`);
        }
    }

    const pil2AIR = new PIL2AIR();

    pil2AIR.name = json.name;

    const curve = await getCurveFromR(json.primeR);
    pil2AIR.Fr = curve.Fr;

    pil2AIR.numProofValues = json.numProofValues;
    pil2AIR.numPublicValues = json.numPublicValues;

    pil2AIR.addSubproofs(json.subproofs);
    pil2AIR.addChallenges(json.challenges);
    pil2AIR.addPublicTables(json.publicTables);
    pil2AIR.addExpressions(json.expressions);
    pil2AIR.addConstraints(json.constraints);
    pil2AIR.addHints(json.hints);
    pil2AIR.addSymbols(json.symbols);

    return pil2AIR;
}

module.exports = getAIRFromJSON;
