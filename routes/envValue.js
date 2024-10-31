var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  if (process.env.envValue) {
    res.send(process.env.envValue);
  } else {
    res.status(400).send(resolve(path.join(__dirname, '/config/.env')));
  }
});

module.exports = router;
