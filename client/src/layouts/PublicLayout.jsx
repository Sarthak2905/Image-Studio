import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { useScrollTop } from '../hooks/useScrollTop';

const PublicLayout = () => {
  useScrollTop();

  return (
    <div className="min-h-screen luxury-gradient">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PublicLayout;
