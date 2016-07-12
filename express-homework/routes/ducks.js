var express = require('express');
var router = express.Router();

// display a list of all ducks
router.get('/', (req, res) => res.send('display a list of all ducks'));
// create a new duck
router.post('/', (req, res) => res.send('create a new duck'));
// display a specific duck
router.get('/:id', (req, res) => res.send("display duck " + req.params.id));
// update a specific duck
router.put('/:id', (req, res) => res.send("update duck " + req.params.id));
// provide a detailed text description for how this specific duck quacks
router.get('/:id/quack', (req, res) => res.send("a detailed text description for how " + req.params.id + " quacks"));
// delete a specific duck
router.delete('/:id', (req, res, next) => res.send("delete " + req.params.id));

module.exports = router;
