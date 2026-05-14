const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, default: 'wedding' },
    description: String,
    coverImage: String,
    gallery: [{ type: String }],
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Portfolio', portfolioSchema);
