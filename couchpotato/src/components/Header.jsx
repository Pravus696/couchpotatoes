import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* recent post */}
          </li>
          <li>
            <Link to="/couches">Featured</Link> {/* top XXX posts */}
          </li>
          <li>
            <Link to="/profile">Profile</Link> {/* user profile */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
