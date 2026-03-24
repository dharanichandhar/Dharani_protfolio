import { useNavbar } from '../../hooks/useNavbar';
import ThemeToggle from './ThemeToggle';
import { navLinks, personalInfo } from '../../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const { isScrolled, activeSection, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavbar();

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          <span className="logo-text">DHARANI</span>
        </a>
        <button
          className="nav-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-theme-toggle">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
