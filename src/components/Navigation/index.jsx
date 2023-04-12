import styles from "./style.module.scss";
import { clsx } from "clsx";
import { useState } from "react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            // styles.active,
            !isOpen && styles.unvisible
          )}
        >
          <a href="/">About me</a>
          <a href="/projects">Projects</a>
          <a href="/NikolaCulic.pdf" download>
            Download CV
          </a>
        </div>
      </div>
      <div className={styles["nav-holder"]}>
        <div className={styles["nav-links"]}>
          <ul>
            <li>
              <a href="/">About me</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="./NikolaCulic.pdf" download={true}>
                Download CV
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </>
  );
};

export default Navigation;
