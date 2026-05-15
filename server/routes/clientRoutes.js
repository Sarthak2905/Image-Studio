const express = require('express');
const { body, param } = require('express-validator');
const { getClients, createClient, createClientFromLead, updatePayment } = require('../controllers/clientController');
const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');

const router = express.Router();
router.use(protect);

router.get('/', getClients);
router.post('/', [body('name').trim().notEmpty(), body('email').isEmail().normalizeEmail(), body('phone').trim().notEmpty(), validate], createClient);
router.post('/from-lead/:leadId', [param('leadId').isMongoId(), body('packageAmount').isNumeric(), validate], createClientFromLead);
router.patch('/:id/payment', [param('id').isMongoId(), body('advancePaid').optional().isNumeric(), body('remainingPaid').optional().isNumeric(), validate], updatePayment);

module.exports = router;
