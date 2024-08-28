import React from 'react';
import { Box, CloseButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function SideMenu({ isOpen, onClose, sectionRefs }) {
  const handleScrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <Box
      id="sideBarMenu"
      display={isOpen ? 'block' : 'none'}
      position="fixed"
      top="0"
      left="0"
      width="250px"
      height="100%"
      bg="#EDEFEE"
      color="#495E57"
      zIndex="1000"
      p="4"
    >
      <CloseButton onClick={onClose} position="absolute" top="10px" right="10px" />
      <nav>
        <div id="sideMenuVStack">
        <Link to="/" className="nav" onClick={() => handleScrollToSection('home')}>Home</Link>
            <Link to="/" className="nav" onClick={() => handleScrollToSection('about')}>AboutMe</Link>
            <Link to="/" className="nav" onClick={() => handleScrollToSection('resume')}>Resume</Link>
            <Link to="/" className="nav" onClick={() => handleScrollToSection('projects')}>Projects</Link>
            <Link to="/" className="nav" onClick={() => handleScrollToSection('contactMe')}>ContactMe</Link>
        </div>
      </nav>
    </Box>
  );
}

export default SideMenu;
