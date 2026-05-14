const express = require('express');
const { body } = require('express-validator');
const { login } = require('../controllers/authController');
const validate = require('../middleware/validate');

const router = express.Router();

router.post('/login', [body('email').isEmail(), body('password').isLength({ min: 6 }), validate], login);

module.exports = router;
