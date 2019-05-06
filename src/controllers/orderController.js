var Order = require('../models/OrderModel');


exports.addOrder = function(req, res) {
    //res.send('Calling addOrder function');
    if(!req.body){
        return res.status(400).send('Request body missing');
    } 
    var model = new Order(req.body);
    model.save()
        .then((doc)=>{
            if(!doc || doc.length === 0){
                return res.status(500).send('Server error.');
            }
            res.status(201).send(doc);
        })
        .catch((err)=>{
            res.status(500).json(err);
        });
}

exports.showOrder = function(req, res) {
    //res.send('Calling showOrder function');
    if(!req.query.orderId) {
        return res.status(400).send('Missing URL parameter.');
    }
    Order.findOne({
        orderId: req.query.orderId
    })
    .then((doc)=> {
        res.json(doc);
    })
    .catch((err)=> {
        res.status(500).json(err);
    });
}

exports.changeOrder = function(req, res) {
    //res.send('Calling changeOrder function');
    Order.findOneAndUpdate({
        orderId: req.query.orderId
    }, req.body, {new: true})
    .then((doc)=> {
        res.json(doc);
    })
    .catch((err)=> {
     res.status(500).json(err);
 });
 
}

exports.deleteOrder = function(req, res) {
    //res.send('Calling deleteOrder function');
    if(!req.query.orderId){
        return res.status(400).send('Missing URL parameter.')
    }
    Order.findOneAndRemove({
        orderId: req.query.orderId
    })
    .then((doc)=>{
        res.json(doc);
    })
    .catch((err)=>{
        res.status(500).json(err);
    });
}

