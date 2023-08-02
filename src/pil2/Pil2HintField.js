const PIL2Operand = require('./Pil2Operand');
const PIL2HintFieldArray = require('./Pil2HintFieldArray');

const HINTFIELDTYPES = {
    STRING: 0,
    OPERAND: 1,
    ARRAY: 2,
};

class PIL2HintField {
    constructor(id, hintFieldType, name, value) {
        this.id = id;
        if(!Object.values(HINTFIELDTYPES).includes(hintFieldType))
            throw new Error('Invalid hint field type');
        this.hintFieldType = hintFieldType;
        this.name = name;

        const valueMap = {
            STRING: { class: String, value: stringValue },
            OPERAND: { class: PIL2Operand, value: operand },
            ARRAY: { class: PIL2HintFieldArray, value: hintFields },
        };
          
        if (!valueMap.hasOwnProperty(hintFieldType))
            throw new Error("Unknown hint field: " + hintFieldType);

        this.value = new valueMap[hintFieldType].class(value[valueMap[hintFieldType].value]);
    }


    toJson() {
        return {
            hintFieldType: this.hintFieldType,
            name: this.name,
            value: this.value.toJson()
        }
    }
}

module.exports = PIL2Hint;
