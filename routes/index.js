var express = require('express');
var router = express.Router();
const dbSecurity = require("../shared/dbSecurity");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/encrypt', function (req, res, next) {
  let Data = dbSecurity.encrypt(req.body.password);
  res.send({
    Data
  });
});

router.post('/decrypt', function (req, res, next) {
  let Data = dbSecurity.decrypt(req.body.encryptpassword);
  res.send({
    Data
  });
});

module.exports = router;