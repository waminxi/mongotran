var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 第一个参数是模板的名称，即views目录下的文件名；第二个参数是传递给模板的数据
  res.render('index', { title: 'Express' });
});

module.exports = router;
