var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

mongoose.connect('mongodb://avivero:avivero_products@ds143081.mlab.com:43081/node_crud_products', function (err, res) {
    if (err) {
        console.log('ERROR: connecting to the database.' + err);
    }
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require('./models/Product')(app, mongoose);
var productController = require('./controllers/products');


//API routes
var products = express.Router();

products.route('/product')
    .get(productController.findAllProducts)
    .post(productController.addProduct);

products.route('/product:id')
    .get(productController.findById)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);

app.use(products);


app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});