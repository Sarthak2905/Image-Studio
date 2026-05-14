const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.set('sanitizeFilter', true);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅ MongoDB connected');
};

module.exports = connectDB;
