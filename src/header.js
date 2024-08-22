import React from 'react';
import './header.css'; 

function HeaderMenu() {
  return (
    <header>
      <nav className="header-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    
  );
}

export default HeaderMenu;
