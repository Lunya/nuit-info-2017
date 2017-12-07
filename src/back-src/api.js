let express = require('express');
let cors = require('cors');
let router = express.Router();

router.use(cors());

router.get('/', (req, res) => {
	res.contentType('text/plain');
	res.status(200).send('Hello API !');
});

module.exports = router;
