var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  if (process.env.CONFIG_VALUE) {
    res.send(process.env.CONFIG_VALUE);
  } else {
    res.status(400).send("No configValue found");
  }
}
);

module.exports = router;
