import Navigation from "@/components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

import styles from "./home.module.css";

const Home = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Navigation />
          <div className={styles["heading-container"]}>
            <div className={styles.heading}>
              <h2>Hello World</h2>
            </div>
            <div className={styles["heading-desc"]}>
              <h4>
                Hi, I'm Nikola and I'm a software tester<br></br> with strong
                desire to become front<span>end</span> developer!
              </h4>
            </div>
            <div className={styles["tech-heading"]}>
              <h2>My technologies</h2>
            </div>
            <div className={styles["tech-wrapper"]}>
              <div className={styles["tech-desc"]}>
                <h3>JS</h3>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                >
                  <img src="./js-logo.png" alt="javascript" />
                </a>
              </div>
              <div className={styles["tech-desc"]}>
                <h3>REACT</h3>
                <a href="https://reactjs.org/" target="_blank">
                  <img src="./logo192.png" alt="react" />
                </a>
              </div>
              <div className={styles["tech-desc"]}>
                <h3>FIREBASE</h3>
                <a href="https://firebase.google.com/docs" target="_blank">
                  <img src="./firebase-logo.png" alt="firebase" />
                </a>
              </div>
              <div className={styles["tech-desc"]}>
                <h3>POSTMAN</h3>
                <a
                  href="https://learning.postman.com/docs/getting-started/introduction/"
                  target="_blank"
                >
                  <img src="./postmanLogo.webp" alt="postman" />
                </a>
              </div>
              <div className={styles["tech-desc"]}>
                <h3>CYPRESS</h3>
                <a
                  href="https://docs.cypress.io/guides/overview/why-cypress"
                  target="_blank"
                >
                  <img src="./cypressLogo.png" alt="cypress" />
                </a>
              </div>
            </div>
            <div className={styles["footer-heading"]}>
              <h3>You can find me here</h3>
            </div>
            <div className={styles["footer-social"]}>
              <h4>Linkedin</h4>
              <h4>Github</h4>
            </div>
            <div className={styles["footer-icons"]}>
              <a
                href="https://www.linkedin.com/in/nikola-culic-19b408242/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: "32px", color: "#0077b5" }}
                />
              </a>
              <a href="https://github.com/Culic96" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: "32px", color: "#333" }}
                />
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
