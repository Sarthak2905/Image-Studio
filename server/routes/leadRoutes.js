const express = require('express');
const { body } = require('express-validator');
const { createInquiry, getLeads, updateLeadStatus } = require('../controllers/leadController');
const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');

const router = express.Router();

router.post('/public-inquiry', [body('name').notEmpty(), body('email').isEmail(), body('phone').notEmpty(), body('message').notEmpty(), validate], createInquiry);
router.get('/', protect, getLeads);
router.patch('/:id/status', protect, [body('status').isIn(['new', 'contacted', 'converted', 'closed']), validate], updateLeadStatus);

module.exports = router;
