const express = require('express');
const { body } = require('express-validator');
const { getTestimonials, createTestimonial } = require('../controllers/testimonialController');
const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');

const router = express.Router();

router.get('/', getTestimonials);
router.post('/', protect, [body('name').notEmpty(), body('quote').notEmpty(), validate], createTestimonial);

module.exports = router;
