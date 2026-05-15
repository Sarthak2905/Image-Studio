const express = require('express');
const authRoutes = require('./authRoutes');
const leadRoutes = require('./leadRoutes');
const clientRoutes = require('./clientRoutes');
const bookingRoutes = require('./bookingRoutes');
const revenueRoutes = require('./revenueRoutes');
const portfolioRoutes = require('./portfolioRoutes');
const testimonialRoutes = require('./testimonialRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/leads', leadRoutes);
router.use('/clients', clientRoutes);
router.use('/bookings', bookingRoutes);
router.use('/revenue', revenueRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/testimonials', testimonialRoutes);

module.exports = router;
