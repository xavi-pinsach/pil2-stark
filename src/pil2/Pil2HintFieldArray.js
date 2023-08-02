const PIL2HintField = require("./Pil2HintField");

class PIL2HintFieldArray {
    constructor(hintFields) {
        this.hintFields = [];

        this.addHintFields(hintFields);
    }

    get numHintFields() {
        return this.hintFields.length;
    }

    addHintFields(hintFields) {
        if (this.hintFields.length > 0)
            throw new Error("Hintfields already added");

        for (let i = 0; i < hintFields.length; i++) {
            this.addHintField(hintFields[i]);
        }
    }

    addHintField(hintField) {
        const hintFieldId = this.numHintFields;
        const pil2HintField = new PIL2HintField(hintFieldId, hintField.hintFieldType, hintField.name, hintField.value);

        this.hintFields.push(pil2HintField);
    }

    toJson() {
        return this.array.map((hintField) => hintField.toJson());
    }
}

module.exports = PIL2HintFieldArray;
