// import { ok } from "assert";
// import { getCurveFromName } from "ffjavascript";
const getAIRFromJSON = require("../src/Pil2AirJSON.js");

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
                    airs: [ {name: "test", numRows: 33, periodicCols: [1,1,2], fixedCols: [99, 99], stageWidths: [75,75,75],
                        expressions: [{operation: 'add', lhs: 131, rhs: 242}],
                        constraints: []
                    },
                    {name: "test1", numRows: 44, periodicCols: [22,3], fixedCols: [100, 100], stageWidths: [175,175,175],
                    expressions: [{operation: 'neg', value: 531}],
                    constraints: []
                } ]
                }
            ],
            publicTables: [],
            expressions: [],
            constraints: [],
            hints: [],
            symbols: [ {name: "symbol1", type: 5, id: 74, dim: 3, lengths: [4,3,2,1], debugLine: 77}, ]
        };

        air = await getAIRFromJSON(airJSON);

        console.log(JSON.stringify(airJSON));
        console.log(JSON.stringify(air.toJson()));
    });
});
