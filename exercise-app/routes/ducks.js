var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use((req, res, next)=>{
	console.log("quack");
	next();
});
router.get('/:id', duckCallback)
router.get('/:DuckID/quacks/:QuackID', duckQuackCallback)

function duckCallback(req, res, next){
	res.send("Duck " + req.params.id);
}
function duckQuackCallback(req, res, next){
	res.send("Duck " + req.params.DuckID + " quack " + req.params.QuackID);
}


module.exports = router;