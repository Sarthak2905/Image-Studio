const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

const apiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 400, standardHeaders: true, legacyHeaders: false });

app.use(helmet());
app.use(cors({
  origin: (process.env.CORS_ORIGIN || '').split(',').filter(Boolean),
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(mongoSanitize());
app.use('/api', apiLimiter);

app.get('/api/health', (req, res) => res.json({ success: true, message: 'Server running' }));
app.use('/api', routes);
app.use(errorHandler);

module.exports = app;
