import React, { createContext, useState } from "react";

export const ScrollContext = createContext();

const  ScrollProvider = ({ children }) => {
    const[heroRef, setHeroRef] = useState(null);
  const [aboutRef, setAboutRef] = useState(null);
  const [roadmapRef, setRoadmapRef] = useState(null);
  const [projectsRef, setProjectsRef] = useState(null);
  const [contactRef, setContactRef] = useState(null);
  return (
    <ScrollContext.Provider value={{ aboutRef, setAboutRef, roadmapRef, setRoadmapRef, projectsRef, setProjectsRef, contactRef, setContactRef, heroRef, setHeroRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;