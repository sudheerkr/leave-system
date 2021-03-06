var express = require('express');
var router = express.Router();
var leaveDaoController = require('../daoController/leaveDaoController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/user', function(req, res, next) {
    res.render('user');
});

router.post('/apply', leaveDaoController.userApply);

router.get('/showdate', leaveDaoController.showApplyDate);

module.exports = router;
