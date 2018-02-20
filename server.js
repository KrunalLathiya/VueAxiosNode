const express = require('express');
const  path = require('path');
const  bodyParser = require('body-parser');
const  cors = require('cors');
const  mongoose = require('mongoose');
const  config = require('./config/DB');
const ticketRoutes = require('./exproutes/ticket.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB);
      
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/tickets', ticketRoutes);
var port = process.env.PORT || 4000;

app.listen(port, function(){
  console.log('Node js Express js Tutorial at port', port);
});