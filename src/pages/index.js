import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import ScrollProvider from "./scrollContext";
import projects from "../data/projects";
import styles from "./home.module.css";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import Roadmap from "@/components/RoadMap";
import ProjectList from "@/components/Projects";
import Contact from "@/components/Contact";
const Home = () => {
  const [loading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  }, [loading]);

  const handleClickScroll = (ref) => {
    ref.scrollIntoView({ behavior: "smooth" });
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleToggleOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="pageWrapper">
          <ScrollProvider>
            <Navigation isOpen={isOpen} toggleOpen={handleToggleOpen}  handleClickScroll={handleClickScroll} />

                <Hero />
                <AboutMe />
                <Roadmap  />
                <ProjectList projects={projects} />
                <Contact  />
          </ScrollProvider>
        </div>
      )}
    </>
  );
};

export default Home;
