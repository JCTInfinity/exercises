var express = require('express');
var router = express.Router();
var emailsdb = require('../models/emails');

/* GET emails listing. */
router.get('/', function(req, res, next) {
	emailsdb
		.find()
		.exec(function(err, emails) {
			if(err) {
				res.send("<h1>Oops! Error</h1>" + err.toString());
			} else {
				res.json(emails);
			}
		})
});
router.get('/search/:field/:search', function(req, res, next) {
	emailsdb
		.where(req.params.field)
		.regex(new RegExp(req.params.search, "i"))
		.exec((err, emails) => {
			if(err) res.send("<h1>Oops! Error</h1>" + err.toString());
			res.send(emails)
		})
	
});


module.exports = router;
 