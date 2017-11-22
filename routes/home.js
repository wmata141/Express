var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('home');
  // res.render('home.jsx');
//   res.send('respond with a resource');
});

module.exports = router;