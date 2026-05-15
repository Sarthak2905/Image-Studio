import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { login } from '../redux/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const { token, loading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('admin@imagestudio.com');
  const [password, setPassword] = useState('admin123');

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(login({ email, password }));
    if (result.meta.requestStatus === 'fulfilled') toast.success('Logged in');
    if (result.meta.requestStatus === 'rejected') toast.error(result.payload);
  };

  if (token) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen grid place-items-center p-4">
      <form onSubmit={onSubmit} className="card w-full max-w-md p-6 space-y-4">
        <h1 className="text-2xl">Admin Login</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-black/30 rounded-lg px-4 py-3 border border-white/10" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-black/30 rounded-lg px-4 py-3 border border-white/10" />
        <button disabled={loading} className="w-full py-3 rounded-lg bg-brand-gold text-black font-medium">{loading ? 'Authenticating...' : 'Login'}</button>
      </form>
    </div>
  );
};

export default Login;
