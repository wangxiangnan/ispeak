var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.sendfile(process.cwd() + '/public/html/server/login.html');
});
router.get('/article', function(req, res, next) {
  res.sendfile(process.cwd() + '/public/html/server/article.html');
});


module.exports = router;
