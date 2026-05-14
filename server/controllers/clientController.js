const Client = require('../models/Client');
const Lead = require('../models/Lead');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');

const getClients = asyncHandler(async (req, res) => {
  const clients = await Client.find().sort({ createdAt: -1 });
  res.status(200).json(new ApiResponse(200, clients));
});

const createClient = asyncHandler(async (req, res) => {
  const packageAmount = Number(req.body.packageAmount || 0);
  const advancePaid = Number(req.body.advancePaid || 0);
  const remainingPaid = Number(req.body.remainingPaid || 0);

  const client = await Client.create({
    ...req.body,
    packageAmount,
    advancePaid,
    remainingPaid,
    pendingAmount: Math.max(packageAmount - (advancePaid + remainingPaid), 0),
  });

  res.status(201).json(new ApiResponse(201, client, 'Client created'));
});

const createClientFromLead = asyncHandler(async (req, res) => {
  const lead = await Lead.findById(req.params.leadId);
  if (!lead) throw new ApiError(404, 'Lead not found');

  const packageAmount = Number(req.body.packageAmount || 0);
  const advancePaid = Number(req.body.advancePaid || 0);

  const client = await Client.create({
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    lead: lead._id,
    packageAmount,
    advancePaid,
    remainingPaid: 0,
    pendingAmount: Math.max(packageAmount - advancePaid, 0),
    notes: req.body.notes || '',
  });

  lead.status = 'converted';
  await lead.save();

  res.status(201).json(new ApiResponse(201, client, 'Lead converted to client'));
});

const updatePayment = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id);
  if (!client) throw new ApiError(404, 'Client not found');

  client.advancePaid = Number(req.body.advancePaid ?? client.advancePaid);
  client.remainingPaid = Number(req.body.remainingPaid ?? client.remainingPaid);
  client.pendingAmount = Math.max((client.packageAmount || 0) - (client.advancePaid + client.remainingPaid), 0);
  await client.save();

  res.status(200).json(new ApiResponse(200, client, 'Payment updated'));
});

module.exports = { getClients, createClient, createClientFromLead, updatePayment };
