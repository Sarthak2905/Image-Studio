import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnalyticsCard from '../components/AnalyticsCard';
import ChartCard from '../components/ChartCard';
import { getDashboardStats } from '../redux/slices/dashboardSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.dashboard.stats);

  useEffect(() => {
    dispatch(getDashboardStats());
  }, [dispatch]);

  const cards = [
    ['Total Revenue', `₹${stats?.totalRevenue || 0}`],
    ['Monthly Revenue', `₹${stats?.monthlyRevenue || 0}`],
    ['Pending Payments', `₹${stats?.pendingPayments || 0}`],
    ['Upcoming Bookings', stats?.upcomingBookings || 0],
    ['Completed Projects', stats?.completedProjects || 0],
  ];

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4">
        {cards.map(([label, value]) => <AnalyticsCard key={label} label={label} value={value} />)}
      </div>
      <ChartCard data={stats?.monthlyBreakdown || []} />
    </div>
  );
};

export default Dashboard;
