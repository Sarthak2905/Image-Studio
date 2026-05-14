const express = require('express');
const { body, param } = require('express-validator');
const { createInquiry, getLeads, updateLeadStatus } = require('../controllers/leadController');
const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');

const router = express.Router();

router.post('/public-inquiry', [body('name').trim().notEmpty(), body('email').isEmail().normalizeEmail(), body('phone').trim().notEmpty(), body('message').trim().notEmpty(), validate], createInquiry);
router.get('/', protect, getLeads);
router.patch('/:id/status', protect, [param('id').isMongoId(), body('status').isIn(['new', 'contacted', 'converted', 'closed']), validate], updateLeadStatus);

module.exports = router;
