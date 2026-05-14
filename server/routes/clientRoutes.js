const express = require('express');
const { body } = require('express-validator');
const { getClients, createClient, createClientFromLead, updatePayment } = require('../controllers/clientController');
const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');

const router = express.Router();
router.use(protect);

router.get('/', getClients);
router.post('/', [body('name').notEmpty(), body('email').isEmail(), body('phone').notEmpty(), validate], createClient);
router.post('/from-lead/:leadId', [body('packageAmount').isNumeric(), validate], createClientFromLead);
router.patch('/:id/payment', [body('advancePaid').optional().isNumeric(), body('remainingPaid').optional().isNumeric(), validate], updatePayment);

module.exports = router;
