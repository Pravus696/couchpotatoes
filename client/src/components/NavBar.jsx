import 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NavBar.css';

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <img src="/path-to-your-logo.png" alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">CouchPotatoes</h1>
      </div>
      <nav>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
