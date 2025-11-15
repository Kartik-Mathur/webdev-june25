const path = require('path');
const express = require('express');
const { createBoard, getBoard } = require('../controllers/boardController');
const router = express.Router();

router.post('/createboard', createBoard);
router.get('/getboard/:boardId', getBoard);
// router.get('/', );


module.exports = router;