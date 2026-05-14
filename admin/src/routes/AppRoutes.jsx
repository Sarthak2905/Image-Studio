import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import ProtectedRoute from './ProtectedRoute';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Leads from '../pages/Leads';
import Clients from '../pages/Clients';
import Revenue from '../pages/Revenue';
import Bookings from '../pages/Bookings';
import Portfolio from '../pages/Portfolio';
import Testimonials from '../pages/Testimonials';
import Settings from '../pages/Settings';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      element={(
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      )}
    >
      <Route path="/" element={<Dashboard />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/revenue" element={<Revenue />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
