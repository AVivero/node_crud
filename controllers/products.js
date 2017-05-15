var mongoose = require('mongoose');

var Product = mongoose.model('Product');

exports.findAllProducts = function (req, res) {
    Product.find(function (err, products) {
        if (err) res.send(500, err.message);
        console.log('GET /products');
        res.status(200).jsonp(products);
    });
}

exports.findById = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) res.send(500, err.message);
        console.log('GET /product/' + req.params.id);
        res.status(200).jsonp(product);
    });
}

exports.addProduct = function (req, res) {
    console.log('POST');
    console.log(req.body);

    var product = new Product({
        id: req.body.id,
        sku: req.body.sku,
        name: req.body.name,
        cost: req.body.cost,
        price: req.body.price,
        specialPrice: req.body.specialPrice
    });

    product.save(function (err, product) {
        if (err) return res.status(500).send(err.message);
        res.status(200).jsonp(product);
    });
}

exports.updateProduct = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        product.id = req.body.id;
        product.sku = req.body.sku;
        product.name = req.body.name;
        product.cost = req.body.cost;
        product.price = req.body.price;
        product.specialPrice = req.body.specialPrice;

        product.save(function (err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).jsonp(product);
        });
    });
};

exports.deleteProduct = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        product.remove(function (err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).send();
        });
    });
}

