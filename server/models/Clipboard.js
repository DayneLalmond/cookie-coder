const { Schema, model } = require('mongoose');

const clipboardSchema = new Schema({
  //this all creates the information for the clipboard schema which will beput together at typeDefs
  code: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
    trim: true,
  },
});


const Clipboard = model('Clipboard', clipboardSchema);

module.exports = Clipboard;
