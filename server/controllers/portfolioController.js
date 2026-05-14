const Portfolio = require('../models/Portfolio');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const { uploadToCloudinary } = require('../services/cloudinaryService');

const getPortfolio = asyncHandler(async (req, res) => {
  const items = await Portfolio.find().sort({ createdAt: -1 });
  res.status(200).json(new ApiResponse(200, items));
});

const getPublicStories = asyncHandler(async (req, res) => {
  const stories = await Portfolio.find({ isPublished: true }).sort({ createdAt: -1 });
  res.status(200).json(new ApiResponse(200, stories));
});

const createPortfolio = asyncHandler(async (req, res) => {
  let coverImage = req.body.coverImage;
  if (req.file?.buffer) coverImage = await uploadToCloudinary(req.file.buffer, 'image-studio/portfolio');

  const item = await Portfolio.create({
    ...req.body,
    coverImage,
    slug: (req.body.slug || req.body.title || 'wedding-story').toLowerCase().replace(/\s+/g, '-'),
  });

  res.status(201).json(new ApiResponse(201, item, 'Portfolio added'));
});

module.exports = { getPortfolio, getPublicStories, createPortfolio };
