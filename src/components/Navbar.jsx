import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

// Links shared between the desktop nav and the mobile menu
const navLinks = [
  { to: '/', label: 'Kryefaqja' },
  { to: '/books', label: 'Librat dhe Kategoritë' },
  { to: '/library', label: 'Biblioteka e Shkodrës' },
  { to: '/contact', label: 'Na Kontaktoni' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          <img src={logo} alt="Lexo n'Shkodër" className="navbar__logo" />
          <span>Lexo n'Shkodër</span>
        </NavLink>

        <nav className={`navbar__links ${isMenuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'is-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/my-card" onClick={closeMenu} className="btn btn-primary navbar__cta">
            Kartela Ime
          </NavLink>
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Hap ose mbyll menynë e navigimit"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
