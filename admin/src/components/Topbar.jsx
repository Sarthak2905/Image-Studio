import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Topbar = () => {
  const dispatch = useDispatch();

  return (
    <header className="card p-4 flex items-center justify-between mb-6">
      <h1 className="text-xl font-semibold">Business Dashboard</h1>
      <button onClick={() => dispatch(logout())} className="px-4 py-2 rounded-lg bg-brand-gold text-black text-sm font-medium">
        Logout
      </button>
    </header>
  );
};

export default Topbar;
