const express = require('express');
const { body } = require('express-validator');
const rateLimit = require('express-rate-limit');
const { login } = require('../controllers/authController');
const validate = require('../middleware/validate');

const router = express.Router();

const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false });
router.post('/login', authLimiter, [body('email').isEmail().normalizeEmail(), body('password').isLength({ min: 6 }), validate], login);

module.exports = router;
