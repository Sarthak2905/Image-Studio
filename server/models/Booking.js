const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    eventDate: { type: Date, required: true },
    location: String,
    packageName: String,
    status: { type: String, enum: ['upcoming', 'completed', 'cancelled'], default: 'upcoming' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
