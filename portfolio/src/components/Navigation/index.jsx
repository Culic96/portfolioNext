import styles from "./style.module.scss";

const Navigation = () => {
  return (
    <>
      <div className={styles["nav-holder"]}>
        <div className={styles["nav-links"]}>
          <ul>
            <li>
              <a href="/">About me</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className={styles.download}>
          <li>
            <a href="./NikolaResume.pdf" download={true}>
              Download CV
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navigation;
