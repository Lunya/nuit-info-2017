let express = require('express');
let router = express.Router();
let dc = require('../databaseConnect');

router.post('/comment', (req, res) => {
	res.contentType('application/json');
	bd.query('INSERT INTO ksjbdc', (err, rows) => {
		res.status(200).send({ error: err ? true : false});
	}).catch(err => res.status(500).send('internal server error'));
});

module.exports = router;