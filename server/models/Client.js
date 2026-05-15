const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    packageAmount: { type: Number, default: 0 },
    advancePaid: { type: Number, default: 0 },
    remainingPaid: { type: Number, default: 0 },
    pendingAmount: { type: Number, default: 0 },
    lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead' },
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Client', clientSchema);
