import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import  ScrollProvider  from "./scrollContext";
import projects from "../data/projects";
import styles from "./home.module.css";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import Roadmap from "@/components/RoadMap";
import ProjectList from "@/components/Projects";
import Contact from "@/components/Contact";
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
         <ProjectList projects={projects}/>
         <Contact/>
         </ScrollProvider>
      </div>

      )}
      </>
  );
};

export default Home;
