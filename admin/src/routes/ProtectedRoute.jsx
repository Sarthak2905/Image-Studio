import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token) || localStorage.getItem('admin_token');
  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
