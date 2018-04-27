var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    // 第一个参数是模板的名称，即views目录下的文件名；第二个参数是传递给模板的数据
    res.render('list', {
        title: 'List',
        items: [1991, 'byvoid', 'express', 'Node.js']
    });
});

module.exports = router;