const express = require('express');
const { body } = require('express-validator');
const { getBookings, createBooking } = require('../controllers/bookingController');
const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');

const router = express.Router();
router.use(protect);

router.get('/', getBookings);
router.post('/', [body('client').isMongoId(), body('eventDate').isISO8601(), validate], createBooking);

module.exports = router;
