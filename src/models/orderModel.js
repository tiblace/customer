var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var OrderSchema = new Schema({
    orderId: {
        type: String,
        required: true,
        unique: true

    },
    orderDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema );