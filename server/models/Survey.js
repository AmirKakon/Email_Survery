const mongoose = require('mongoose');
const { Schema } = mongoose; // same as saying: const Schema = mongoose.Schema;

const surveySchema = new Schema(
   {
    title: String,
    body: String,
    subject: String,
    recipients: [String] //array of emails
   } 
);

mongoose.model('surveys', surveySchema);