import styles from "./style.module.css";
import { useState } from "react";
import { useContext } from "react";
import { ScrollContext } from "../../pages/scrollContext";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { heroRef, aboutRef, roadmapRef, projectsRef, contactRef } = useContext(ScrollContext);
  const handleClickScroll = (ref) => {
    ref.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className={styles["nav-holder"]} >
        <div className={styles['logo-holder']}>
          <div className={styles['logo']} onClick={() => handleClickScroll(heroRef)}/>
        </div>
        <div className={styles['nav-links']}>
          <a className={styles['nav-link']} onClick={() => handleClickScroll(aboutRef)}>About me</a>
          <a className={styles['nav-link']} onClick={() => handleClickScroll(roadmapRef)}>My roadmap</a>
          <a className={styles['nav-link']} onClick={() => handleClickScroll(projectsRef)}>Projects</a>
          <a className={styles['nav-link']} onClick={() => handleClickScroll(contactRef)}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
