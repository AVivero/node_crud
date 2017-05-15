var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema(
    {
        id: {type: String},
        sku: {type: String},
        name: {type: String},
        cost: {type: Number},
        price: {type: Number},
        specialPrice: {type: Number}
    }
);

module.exports = mongoose.model('Product', productSchema);