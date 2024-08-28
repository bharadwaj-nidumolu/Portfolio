import Logo from './Logo.svg'
import { Link } from 'react-router-dom';
import React from 'react';

function Navigator(sectionRefs,toggleSidebar){

    const handleScrollToSection = (section) => {
        sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
      };
    
      return (
        <>
          <nav className="navNav">
            {/* <img className="menu_icon" src={Logo} typeof="button" alt="Icon Logo" onClick={toggleSidebar} />
            <img src={Logo} alt="Little-Lemon Logo" /> */}
            <Link to="/" className="nav" onClick={() => handleScrollToSection('home')}>Home</Link>
            <Link to="/" className="nav" onClick={() => handleScrollToSection('about')}>AboutMe</Link>
            <Link to="/" className="nav" onClick={() => handleScrollToSection('resume')}>Resume</Link>
            <Link to="/" className="nav" onClick={() => handleScrollToSection('projects')}>Projects</Link>
            <Link to="/" className="nav" onClick={() => handleScrollToSection('contactMe')}>ContactMe</Link>
          </nav>
        </>
      )
}

export default Navigator;