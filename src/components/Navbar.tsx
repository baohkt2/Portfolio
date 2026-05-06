import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-content">
        <a href="#home" className="logo text-gradient">Bao.</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
