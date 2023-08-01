// import { ok } from "assert";
// import { getCurveFromName } from "ffjavascript";
const PIL2AIRJSON = require("../src/pil2/Pil2AirJSON.js");

const { create, setLogLevel } = require("logplease");
const logger = create("", { showTimestamp: false });
setLogLevel("INFO");

describe("PIL AIR JSON basic test", function () {
    this.timeout(1000000);

    // let curve;

    // before(async () => {
    //     curve = await getCurveFromName("bn128");
    // });

    // after(async () => {
    //     await curve.terminate();
    // });

    it("xxx", async () => {
        airJSON = {
            name: "test",
            primeR: "21888242871839275222246405745257275088548364400416034343698204186575808495617",
            numProofValues: 1,
            numPublicValues: 2,
            challenges: [0, 1, 2, 0],
            subproofs: [
                {
                    aggregated: false,
                    subProofValues: [1, 2, 1, 2],
                    airs: [
                        {
                            name: "test",
                        }
                    ]
                }
            ]
        };

        air = await PIL2AIRJSON.getAIRFromJSON(airJSON);

        console.log(JSON.stringify(airJSON));
        console.log(JSON.stringify(air.toJson()));
    });
});
