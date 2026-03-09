import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logoImg from '../assets/logo.png';

export const QUOTES = [
  "Rust is the language of the future — Jon Gjengst",
  "If it compiles, it works — Unknown",
  "Make it work, make it right, make it fast — Kent Beck",
  "Simplicity is the soul of efficiency — Austin Freeman",
  "First, solve the problem. Then, write the code — John Johnson",
  "Code is like humor. When you have to explain it, it's bad — Cory House",
  "The best error message is the one that never shows up — Thomas Fuchs",
  "Experience is the name everyone gives to their mistakes — Oscar Wilde"
];

const Navbar = () => {
  const [wsAndHDropdownOpen, setWsAndHDropdownOpen] = useState(false);
  const [contentDropdownOpen, setContentDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [levelsDropdownOpen, setLevelsDropdownOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
      <Link to="/" className="nav-logo">
        <img src={logoImg} alt="Superteam UK Logo" className="nav-brand-img" />
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <div
          className="nav-dropdown"
          onMouseEnter={() => setWsAndHDropdownOpen(true)}
          onMouseLeave={() => setWsAndHDropdownOpen(false)}
        >
          <button className="nav-dropdown-btn">
            5Ws and H
            <ChevronDown size={16} className={`nav-dropdown-icon ${wsAndHDropdownOpen ? 'open' : ''}`} />
          </button>
          {wsAndHDropdownOpen && (
            <div className="nav-dropdown-menu">
              <Link to="/what" className="nav-dropdown-item" onClick={() => setWsAndHDropdownOpen(false)}>What</Link>
              <Link to="/when" className="nav-dropdown-item" onClick={() => setWsAndHDropdownOpen(false)}>When</Link>
              <Link to="/where-and-who" className="nav-dropdown-item" onClick={() => setWsAndHDropdownOpen(false)}>Where & Who</Link>
              <Link to="/why" className="nav-dropdown-item" onClick={() => setWsAndHDropdownOpen(false)}>Why</Link>
              <Link to="/how" className="nav-dropdown-item" onClick={() => setWsAndHDropdownOpen(false)}>How</Link>
            </div>
          )}
        </div>
        <Link to="/roadmap" className="nav-link">Roadmap&Metrics</Link>
        <div
          className="nav-dropdown"
          onMouseEnter={() => setLevelsDropdownOpen(true)}
          onMouseLeave={() => setLevelsDropdownOpen(false)}
        >
          <button className="nav-dropdown-btn">
            Levels
            <ChevronDown size={16} className={`nav-dropdown-icon ${levelsDropdownOpen ? 'open' : ''}`} />
          </button>
          {levelsDropdownOpen && (
            <div className="nav-dropdown-menu">
              <Link to="/levels?level=beginners" className="nav-dropdown-item" onClick={() => setLevelsDropdownOpen(false)}>Beginners</Link>
              <Link to="/levels?level=intermediate" className="nav-dropdown-item" onClick={() => setLevelsDropdownOpen(false)}>Intermediate</Link>
              <Link to="/levels?level=advanced" className="nav-dropdown-item" onClick={() => setLevelsDropdownOpen(false)}>Advanced</Link>
            </div>
          )}
        </div>
        <div
          className="nav-dropdown"
          onMouseEnter={() => setProductsDropdownOpen(true)}
          onMouseLeave={() => setProductsDropdownOpen(false)}
        >
          <button className="nav-dropdown-btn">
            Products
            <ChevronDown size={16} className={`nav-dropdown-icon ${productsDropdownOpen ? 'open' : ''}`} />
          </button>
          {productsDropdownOpen && (
            <div className="nav-dropdown-menu">
              <Link to="/reasoning" className="nav-dropdown-item" onClick={() => setProductsDropdownOpen(false)}>Reasoning</Link>
              <Link to="/superteamlearn-app" className="nav-dropdown-item" onClick={() => setProductsDropdownOpen(false)}>SuperteamLearn App</Link>
              <Link to="/super-team-learn-ide" className="nav-dropdown-item" onClick={() => setProductsDropdownOpen(false)}>SuperteamLearnIDE Extension</Link>
            </div>
          )}
        </div>
        <div
          className="nav-dropdown"
          onMouseEnter={() => setContentDropdownOpen(true)}
          onMouseLeave={() => setContentDropdownOpen(false)}
        >
          <button className="nav-dropdown-btn">
            Content Plans
            <ChevronDown size={16} className={`nav-dropdown-icon ${contentDropdownOpen ? 'open' : ''}`} />
          </button>
          {contentDropdownOpen && (
            <div className="nav-dropdown-menu">
              <Link to="/walkthrough" className="nav-dropdown-item" onClick={() => setContentDropdownOpen(false)}>Walkthrough</Link>
              <Link to="/tinos-rust-lab" className="nav-dropdown-item" onClick={() => setContentDropdownOpen(false)}>Tino's Rust Lab</Link>
            </div>
          )}
        </div>
        <Link to="/about" className="nav-link">About me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
