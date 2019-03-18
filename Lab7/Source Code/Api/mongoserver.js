const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose');
config = require('./db');
const CustRoute = require('./ModelRoutes/CustRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/customer', CustRoute);
const port = process.env.PORT || 3200;

const server = app.listen(port, function f(){
  console.log('Listening on port ' + port);
});
