const Booking = require('../models/Booking');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');

const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find().populate('client', 'name email').sort({ eventDate: 1 });
  res.status(200).json(new ApiResponse(200, bookings));
});

const createBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.create(req.body);
  res.status(201).json(new ApiResponse(201, booking, 'Booking created'));
});

module.exports = { getBookings, createBooking };
