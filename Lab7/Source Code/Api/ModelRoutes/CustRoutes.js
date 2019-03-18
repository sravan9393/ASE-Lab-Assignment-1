const express = require('express');
const app = express();
const customerRoutes = express.Router();


let CustModel = require('../Model/CustModel');


customerRoutes.route('/add').post(function (req, res) {
  let customer = new CustModel(req.body);
  customer.save()
    .then(customer => {
      res.status(200).json({'Result': 'customer added successfully'});
    })
    .catch(err => {
      res.status(400).send({'Result' : 'unable to save to database'});
    });
});

// Get all customers
customerRoutes.route('/getall').get(function (req, res, next) {
  Customer.find(function (err, customers) {
    if (err) return next(err);
    res.json(customers);
  });
});

// Get Customer By id
customerRoutes.route('/:id').get(function (req, res, next) {
  Customer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


// Update Customer
customerRoutes.route('/:id').put(function(req, res, next){
  Customer.findByIdAndUpdate(req.params.id, req.body, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})
// Delete Customer
customerRoutes.route('/:id').delete(function(req, res, next){
  Customer.findByIdAndDelete(req.params.id, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})

module.exports = CustRoutes;
