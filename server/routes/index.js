var express = require('express');
var router = express.Router();
var heroService = requiere ('../hero-service');


router.get('/heroes', function(req, res, next) {
  heroService.get(req,res);

  });

module.exports = router;
