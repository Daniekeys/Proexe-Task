import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 mb-4 ">
          <Link to="/" className="navbar-brand mx-5">
              PROEXE Dashboard
          </Link>
        
      </nav>
  )
};

export default Navbar;
