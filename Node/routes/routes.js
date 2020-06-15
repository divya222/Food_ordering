var app = require('express').Router();
var oroutes = require('../order/order-routes');
app.use('/order',oroutes);
module.exports =app;