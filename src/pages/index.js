import Navigation from "@/components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import  ScrollProvider  from "./scrollContext";

import styles from "./home.module.css";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import Roadmap from "@/components/RoadMap";
import { Projects } from "@/components/Projects";
const Home = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
      <div className="pageWrapper">
         <ScrollProvider>
        <Navigation/>
         <Hero/>
         <AboutMe/>
         <Roadmap/>
         <Projects/>
         </ScrollProvider>
      </div>

      )}
      </>
  );
};

export default Home;
