var express = require('express');
var app = express();
var router = express.Router();
var settings = require('../settings')

router.get('/', function (req, res, next) {
    var server = app.listen(3000);
    server.close((err) => {
        res.send("Server closed");
        process.exit(err ? 1 : 0);
    })
});

module.exports = router;
