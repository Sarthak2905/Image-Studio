const Testimonial = require('../models/Testimonial');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');

const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  res.status(200).json(new ApiResponse(200, testimonials));
});

const createTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.create(req.body);
  res.status(201).json(new ApiResponse(201, testimonial, 'Testimonial created'));
});

module.exports = { getTestimonials, createTestimonial };
