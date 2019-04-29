var router = require('express').Router();

router.get('/pet', (req, res)=>{
    res.send(`You have requested a pet by kind: ${req.query.name}`);
});

router.get('/pet/:name', (req, res)=>{
    res.send(`You have requested a pet using params: ${req.params.name}`);
});

module.exports = router;