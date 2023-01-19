import Navigation from "@/components/Navigation";
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
const Projects = () => {
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
          <div className={styles["proj-container"]}>
            <div className={styles["proj-header"]}>
              <h2>My projects</h2>
            </div>
            <div className={styles["proj-wrapper"]}>
              <div className={styles["proj-one"]}>
                <div className={styles["proj-one-header"]}>
                  <h2>Todo App</h2>
                </div>
                <div className={styles["proj-one-desc"]}>
                  <h4>
                    This is simple todo app featuring CRUD options, written in
                    React(Next) using typescript. We also have firebase added to
                    project featuring Auth, Storage and Firestore.
                  </h4>
                </div>
                <a
                  href="https://github.com/Culic96/todo-app"
                  target="_blank"
                  className={styles["proj-link"]}
                >
                  Wiew Work
                </a>
              </div>
              <div className={styles["proj-two"]}>
                <div className={styles["proj-one-header"]}>
                  <h2>Roulette JS</h2>
                </div>
                <div className={styles["proj-one-desc"]}>
                  <h4>
                    This is the first app I created,a simple roulette
                    simulation. The player enter the amount of coins he wish to
                    spend and can play game untill he losses them all. Don't
                    gamble.
                  </h4>
                </div>
                <a
                  href="https://github.com/Culic96/roulette-demo-js"
                  className={styles["proj-link"]}
                  target="_blank"
                >
                  Wiew Work
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Projects;
