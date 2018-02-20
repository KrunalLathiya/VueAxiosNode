const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Items
var Ticket = new Schema({
  email: {
    type: String
  },
  description: {
    type: String
  }
},{
    collection: 'tickets'
});

module.exports = mongoose.model('Ticket', Ticket);