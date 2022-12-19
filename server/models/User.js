const mongoose = require('mongoose');
const { Schema } = mongoose; // same as saying: const Schema = mongoose.Schema;

const userSchema = new Schema(
   {
    googleId: String
   } 
);

mongoose.model('users', userSchema);