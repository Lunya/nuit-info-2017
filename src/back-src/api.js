let express = require('express');
let cors = require('cors');
let router = express.Router();

router.use(cors());

router.use(require('routes/user'));
router.use(require('routes/router'));

module.exports = router;
