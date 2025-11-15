const path = require('path');
const express = require('express');
const { postCreateBoard } = require('../controllers/boardController');
const router = express.Router();

router.post('/create', postCreateBoard);
// router.get('/', );
// router.get('/', );


module.exports = router;