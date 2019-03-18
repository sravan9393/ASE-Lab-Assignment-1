import customer from "../../src/app/customer";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
  customerId: {
    type: Number
  },
  customerName: {
    type: String
  },
  customerEmailId: {
    type: String
  }
},{
  collection: 'pagadala'
});

const customer= mongoose.model('CustModel', customerSchema );
module.exports = customer;

