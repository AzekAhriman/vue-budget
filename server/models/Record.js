/* eslint @typescript-eslint/no-var-requires: "off" */
const mongoose = require('mongoose');
const {Schema} = mongoose;

const Record = new Schema({
    data: {
        blocks: Array,
        budgetCategories: Array,
        budgetValues: Array
    },
    id: {type: String, required: true, unique: true}
});

module.exports = mongoose.model('Record', Record);