import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../utils/constants';

const Navbar = () => (
  <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
    <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <NavLink to="/" className="text-xl font-semibold tracking-[0.2em] text-luxury-gold">IMAGE STUDIO</NavLink>
      <div className="hidden md:flex gap-6 text-sm">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `transition ${isActive ? 'text-luxury-gold' : 'text-zinc-200 hover:text-luxury-gold'}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  </header>
);

export default Navbar;
