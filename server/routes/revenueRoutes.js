const express = require('express');
const { getRevenue, getRevenueDashboard } = require('../controllers/revenueController');
const { protect } = require('../middleware/auth');

const router = express.Router();
router.use(protect);

router.get('/', getRevenue);
router.get('/dashboard', getRevenueDashboard);

module.exports = router;
