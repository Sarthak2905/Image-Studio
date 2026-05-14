const Revenue = require('../models/Revenue');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const { getDashboardStats } = require('../services/revenueService');

const getRevenue = asyncHandler(async (req, res) => {
  const rows = await Revenue.find().sort({ month: 1 });
  res.status(200).json(new ApiResponse(200, rows));
});

const getRevenueDashboard = asyncHandler(async (req, res) => {
  const stats = await getDashboardStats();
  res.status(200).json(new ApiResponse(200, stats));
});

module.exports = { getRevenue, getRevenueDashboard };
