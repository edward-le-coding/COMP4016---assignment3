var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  if (process.env.SECRET_VALUE) {
    res.send(process.env.SECRET_VALUE);
  } else {
    res.status(400).send("No secret value found");
  }
});

module.exports = router;
