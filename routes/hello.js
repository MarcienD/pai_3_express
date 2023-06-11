var express = require('express');
var router = express.Router();

router.get('/witam', function(req, res, next) {
	res.send('World!');
});

router.get('/natalia', function(req, res, next) {
	res.send('witaj Natalia!');
});

router.get('/name=michal', function(req, res, next) {
	res.send('witaj Michal!');
});

module.exports = router;
