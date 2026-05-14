const mongoose = require('mongoose');

const revenueSchema = new mongoose.Schema(
  {
    month: { type: String, required: true },
    totalAmount: { type: Number, default: 0 },
    receivedAmount: { type: Number, default: 0 },
    pendingAmount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Revenue', revenueSchema);
