const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello oisa');
});

module.exports = router;