import React, { createContext, useState } from "react";

export const ScrollContext = createContext();

const  ScrollProvider = ({ children }) => {
  const [aboutRef, setAboutRef] = useState(null);
  const [roadmapRef, setRoadmapRef] = useState(null);
  return (
    <ScrollContext.Provider value={{ aboutRef, setAboutRef, roadmapRef, setRoadmapRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;