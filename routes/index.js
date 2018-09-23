var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/kiosk', function(req, res, next){
  res.render('kiosk/kiosk');
});

router.get('/user', function(req, res, next){
  res.render('user/user');
});
router.get('/control', function(req, res, next){
  res.render('user/control');
});

module.exports = router;
