import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const AdminLayout = () => (
  <div className="p-4 lg:p-6 lg:flex gap-6">
    <Sidebar />
    <main className="flex-1 mt-4 lg:mt-0">
      <Topbar />
      <Outlet />
    </main>
  </div>
);

export default AdminLayout;
