const mongoose = require('mongoose');
const { Schema } = mongoose; // same as saying: const Schema = mongoose.Schema;

const recipientSchema = new Schema(
   {
    email: {type: String, lowercase: true, trim: true},
    responded: {type: Boolean, default: false}
   }
);

module.exports = recipientSchema;