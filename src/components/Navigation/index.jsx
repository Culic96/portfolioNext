import styles from "./style.module.css";
import { clsx } from "clsx";
import { useState } from "react";
import { useContext } from "react";
import { ScrollContext } from "../../pages/scrollContext";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { heroRef, aboutRef, roadmapRef, projectsRef, contactRef } =
    useContext(ScrollContext);
  const handleClickScroll = (ref) => {
    ref.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className={styles["nav-holder-mobile"]}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            styles.burger,
            isOpen && styles.clicked,
            !isOpen && styles.unclicked
          )}
        >
          <div
            className={clsx(
              styles["burger-item"],
              isOpen && styles.clicked,
              !isOpen && styles.unclicked
            )}
          ></div>
          <div
            className={clsx(
              styles["burger-item"],
              isOpen && styles.clicked,
              !isOpen && styles.unclicked
            )}
          ></div>
          <div
            className={clsx(
              styles["burger-item"],
              isOpen && styles.clicked,
              !isOpen && styles.unclicked
            )}
          ></div>
        </div>
        <div
          className={clsx(
            isOpen && [styles.visible, styles.menuList],
            !isOpen && styles.unvisible
          )}
        >
          <a
            onClick={() => {
              handleClickScroll(heroRef);
              setIsOpen(false);
            }}
          >
            Info
          </a>

          <a
            onClick={() => {
              handleClickScroll(aboutRef);
              setIsOpen(false);
            }}
          >
            About me
          </a>
          <a
            onClick={() => {
              handleClickScroll(roadmapRef);
              setIsOpen(false);
            }}
          >
            Roadmap
          </a>
          <a
            onClick={() => {
              handleClickScroll(projectsRef);
              setIsOpen(false);
            }}
          >
            Projects
          </a>
          <a
            onClick={() => {
              handleClickScroll(contactRef);
              setIsOpen(false);
            }}
          >
            Contact
          </a>
          <a onClick={() => setIsOpen(false)} href="/NikolaCulic.pdf" download>
            Download CV
          </a>
        </div>
      </div>
      <div className={styles["nav-holder"]}>
        <div className={styles["logo-holder"]}>
          <div
            className={styles["logo"]}
            onClick={() => handleClickScroll(heroRef)}
          />
        </div>
        <div className={styles["nav-links"]}>
          <a
            className={styles["nav-link"]}
            onClick={() => handleClickScroll(aboutRef)}
          >
            About me
          </a>
          <a
            className={styles["nav-link"]}
            onClick={() => handleClickScroll(roadmapRef)}
          >
            My roadmap
          </a>
          <a
            className={styles["nav-link"]}
            onClick={() => handleClickScroll(projectsRef)}
          >
            Projects
          </a>
          <a
            className={styles["nav-link"]}
            onClick={() => handleClickScroll(contactRef)}
          >
            Contact
          </a>
          <a className={styles["nav-link"]} href="/NikolaCulic.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
