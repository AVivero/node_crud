var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use(router);

app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});