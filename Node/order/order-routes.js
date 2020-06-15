var app = require("express").Router();
var order = require("./order");

app.get("/", order.getall);
app.post("/", order.add);
app.get('/getById',order.getById);
module.exports = app;
