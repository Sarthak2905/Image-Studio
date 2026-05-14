const express = require('express');
const { body } = require('express-validator');
const { getPortfolio, getPublicStories, createPortfolio } = require('../controllers/portfolioController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const validate = require('../middleware/validate');

const router = express.Router();

router.get('/stories/public', getPublicStories);
router.get('/', protect, getPortfolio);
router.post('/', protect, upload.single('coverImage'), [body('title').notEmpty(), validate], createPortfolio);

module.exports = router;
