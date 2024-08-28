import Navigator from './components/Navigator.js';
import Home from './components/Home/Home.js';
import AboutMe from './components/AboutMe.js';
import ProfessionExperience from './components/Resume.js';
import ContactMe from './components/ContactMe.js';
import Projects from './components/Projects.js';
import { Box } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import './App.css';

function App() {

  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsuRef = useRef(null);
  const contactMeRef = useRef(null);
  

  const sectionRefs = {
    home: homeRef,
    about: aboutMeRef,
    resume: resumeRef,
    projects: projectsuRef,
    contactMe: contactMeRef,
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <fr>
      <Navigator sectionRefs={sectionRefs} toggleSidebar={toggleSidebar} />
      <SideMenu isOpen={isSidebarOpen} onClose={closeSidebar} sectionRefs={sectionRefs}/>
      
      <Box ref={homeRef}>
        <Home sectionRefs={sectionRefs} />
      </Box>
      
      <Box ref={aboutMeRef}>
        <AboutMe />
      </Box>

      <Box ref={resumeRef}>
        <ProfessionExperience />
      </Box>

      <Box ref={projectsuRef}>
        <Projects />
      </Box>

      <Box ref={contactMeRef}>
        <ContactMe />
      </Box>

      {/* <Divider style={{ height: "1px", margin: "auto" }} />
      <Footer sectionRefs={sectionRefs} /> */}


    </fr>
  );
}
  
export default App;
