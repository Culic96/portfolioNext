import styles from "./style.module.css";
import { clsx } from "clsx";
import { useContext } from "react";
import { ScrollContext } from "../../pages/scrollContext";
const Navigation = ({ isOpen, toggleOpen }) => {
  const { heroRef, aboutRef, roadmapRef, projectsRef, contactRef } =
    useContext(ScrollContext);
  const handleClickScroll = (ref) => {
    toggleOpen();
    ref.scrollIntoView({ behavior: "smooth" });
 
  };
  return (
    <>
      <div className={styles["nav-holder-mobile"]}>
        <div
          onClick={() => toggleOpen()}
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
            }}
          >
            Info
          </a>

          <a
            onClick={() => {
              handleClickScroll(aboutRef);
            }}
          >
            About me
          </a>
          <a
            onClick={() => {
              handleClickScroll(roadmapRef);
            }}
          >
            Roadmap
          </a>
          <a
            onClick={() => {
              handleClickScroll(projectsRef);
            }}
          >
            Projects
          </a>
          <a
            onClick={() => {
              handleClickScroll(contactRef);
            }}
          >
            Contact
          </a>
          <a onClick={() => toggleOpen()} href="/NikolaCulic.pdf" download>
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
