import { NavLink } from 'react-router-dom';

const links = [
  ['Dashboard', '/'],
  ['Leads', '/leads'],
  ['Clients', '/clients'],
  ['Revenue', '/revenue'],
  ['Bookings', '/bookings'],
  ['Portfolio', '/portfolio'],
  ['Testimonials', '/testimonials'],
  ['Settings', '/settings'],
];

const Sidebar = () => (
  <aside className="w-full lg:w-64 card p-4 lg:min-h-[calc(100vh-2rem)]">
    <h2 className="text-brand-gold tracking-[0.2em] text-sm mb-6">IMAGE STUDIO ADMIN</h2>
    <nav className="space-y-2">
      {links.map(([name, path]) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/'}
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-sm transition ${isActive ? 'bg-brand-gold text-black' : 'hover:bg-white/5 text-zinc-300'}`
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
