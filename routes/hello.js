var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var name = req.body["name"];
    res.send(`Hello ${name}`);
});

module.exports = router;
