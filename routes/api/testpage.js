const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		res.status(200).json("This is the test page");
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})

module.exports = router;
