const Client = require('../models/Client');
const Booking = require('../models/Booking');

const getDashboardStats = async () => {
  const clients = await Client.find();
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  const totalRevenue = clients.reduce((sum, c) => sum + (c.packageAmount || 0), 0);
  const receivedRevenue = clients.reduce((sum, c) => sum + (c.advancePaid || 0) + (c.remainingPaid || 0), 0);
  const pendingPayments = clients.reduce((sum, c) => sum + (c.pendingAmount || 0), 0);

  const monthRevenue = clients
    .filter((c) => c.updatedAt >= monthStart)
    .reduce((sum, c) => sum + (c.advancePaid || 0) + (c.remainingPaid || 0), 0);

  const upcomingBookings = await Booking.countDocuments({ status: 'upcoming', eventDate: { $gte: now } });
  const completedProjects = await Booking.countDocuments({ status: 'completed' });

  const monthlyBreakdown = Array.from({ length: 6 }).map((_, idx) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - idx), 1);
    return { month: d.toLocaleString('default', { month: 'short' }), amount: 0 };
  });

  return {
    totalRevenue,
    receivedRevenue,
    monthlyRevenue: monthRevenue,
    pendingPayments,
    upcomingBookings,
    completedProjects,
    monthlyBreakdown,
  };
};

module.exports = { getDashboardStats };
