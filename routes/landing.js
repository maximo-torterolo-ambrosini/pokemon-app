const express = require('express');
const path = require('path');
const router = express.Router();

const INDEX = path.join(path.dirname(__dirname), 'views', 'index.html');

router.get('/', (req, res) => {
    res.status(200).sendFile(INDEX);
})

module.exports = router;