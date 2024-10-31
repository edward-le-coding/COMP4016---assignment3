var express = require('express');
var fs = require('fs')
var router = express.Router();

router.post('/', function (req, res, next) {
    var stringFilePath = process.cwd() + "/assignment3/stringStorage.txt"
    var newString = req.body["data"];
    try {
        fs.writeFileSync(stringFilePath, newString);
        res.send(newString + " sucessfully written to storage");
    } catch (e) {
        res.send("Could not write to file. " + e);
    }
});

module.exports = router;
