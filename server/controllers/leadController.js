const mongoose = require('mongoose');
const Lead = require('../models/Lead');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');

const createInquiry = asyncHandler(async (req, res) => {
  const lead = await Lead.create({ ...req.body, source: 'website' });
  res.status(201).json(new ApiResponse(201, lead, 'Inquiry stored successfully'));
});

const getLeads = asyncHandler(async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.status(200).json(new ApiResponse(200, leads));
});

const updateLeadStatus = asyncHandler(async (req, res) => {
  const id = String(req.params.id || '');
  if (!mongoose.isValidObjectId(id)) throw new ApiError(400, 'Invalid lead ID');

  const allowedStatuses = new Set(['new', 'contacted', 'converted', 'closed']);
  const requestedStatus = String(req.body.status || '').trim();
  if (!allowedStatuses.has(requestedStatus)) throw new ApiError(422, 'Invalid lead status');

  const filter = mongoose.sanitizeFilter({ _id: id });
  const lead = await Lead.findOne(filter);
  if (!lead) throw new ApiError(404, 'Lead not found');

  lead.status = requestedStatus;
  await lead.save();

  res.status(200).json(new ApiResponse(200, lead, 'Lead updated'));
});

module.exports = { createInquiry, getLeads, updateLeadStatus };
