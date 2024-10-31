var express = require('express');
var fs = require('fs')
var router = express.Router();

router.get('/', function (req, res, next) {
    var stringFilePath = process.cwd() + "/assignment3/stringStorage.txt"
    try {
        // res.send(stringFilePath);
        let data = fs.readFileSync(stringFilePath, 'utf8');
        res.send(data);
    } catch (e) {
        res.status(404).send("Could not open file. " + e);
    }
});

module.exports = router;
