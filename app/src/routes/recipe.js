var express = require('express');
var router = express.Router();

router.get('/recipe', function(req, res, next) {
  res.render('recipe');
});

module.exports = router;
