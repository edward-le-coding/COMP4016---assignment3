var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    busyWait();
    res.send("Done waiting!");
});

async function busyWait() {
    let done = false;
    let currNum = 0;
    let startTime = Date.now();
    while (!done) {
        console.log("hello world " + currNum++);
        // 180000 ms in 3 minutes
        if (Date.now() >= startTime + 180000) {
            break;
        }
    }
}

module.exports = router;
