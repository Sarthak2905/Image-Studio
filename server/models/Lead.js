const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    weddingDate: Date,
    budget: Number,
    message: String,
    source: { type: String, enum: ['website', 'manual'], default: 'website' },
    status: { type: String, enum: ['new', 'contacted', 'converted', 'closed'], default: 'new' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', leadSchema);
