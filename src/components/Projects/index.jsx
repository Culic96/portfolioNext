import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRef, useContext, useEffect, useState } from "react";
import { ScrollContext } from "@/pages/scrollContext";

export function Projects({ project, reverseLayout }) {
  const [currentPicturePointer, setCurrentPicturePointer] = useState(0);
  const [animate, setAnimate] = useState(false);

  const getNextPicture = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      setCurrentPicturePointer(
        (prevPointer) => (prevPointer + 1) % project.images.length
      );
    }, 280);
   
  };

  const getPreviousPicture = () => {
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
      setCurrentPicturePointer((prevPointer) => {
        const newPointer = prevPointer - 1;
        if (newPointer < 0) {
          return project.images.length - 1;
        } else {
          return newPointer;
        }
      });
    }, 280);
  };

  return (
    <div className={style["project-wrapper"]}>
      <div
        className={`${style["project"]} ${
          reverseLayout ? style["project-reverse"] : ""
        }`}
      >
        {reverseLayout && (
          <>
            <div className={style["project-desc"]}>
              <h2 className={style["project-desc-title"]}>{project.title}</h2>
              <p className={style["project-desc-text"]}>{project.desc}</p>
              <h6 className={style["project-desc-tech"]}>{project.tech}</h6>
              <h6 className={style["project-desc-code"]}>
                Code
                <a target="_blank" rel="noopener noreferrer" href={project.url}>
                  <FontAwesomeIcon
                    style={{ fontSize: "32px", color: "white" }}
                    icon={faGithub}
                  />
                </a>
              </h6>
            </div>
            <div className={style["project-background-holder"]}>
              <div className={style["project-background"]}>
                <img
                  className={animate ? style["animateRight"] : ""}
                  src={project.images[currentPicturePointer].url}
                  alt="Project Image"
                />
              </div>
              <div className={style["project-buttons"]}>
                <button
                  className={style["primary-button"]}
                  onClick={getPreviousPicture}
                >
                  Prev Picture
                </button>
                <button
                  className={style["primary-button"]}
                  onClick={getNextPicture}
                >
                  Next Picture
                </button>
              </div>
            </div>
          </>
        )}

        {!reverseLayout && (
          <>
            <div className={style["project-background-holder"]}>
              <div className={style["project-background"]}>
                <img
                  className={animate ? style["animateLeft"] : ""}
                  src={project.images[currentPicturePointer].url}
                  alt="Project Image"
                />
              </div>
              <div className={style["project-buttons"]}>
                <button
                  className={style["primary-button"]}
                  onClick={getPreviousPicture}
                >
                  Prev Picture
                </button>
                <button
                  className={style["primary-button"]}
                  onClick={getNextPicture}
                >
                  Next Picture
                </button>
              </div>
            </div>
            <div className={style["project-desc"]}>
              <h2 className={style["project-desc-title"]}>{project.title}</h2>
              <p className={style["project-desc-text"]}>{project.desc}</p>
              <h6 className={style["project-desc-tech"]}>{project.tech}</h6>
              <h6 className={style["project-desc-code"]}>
                Code
                <a target="_blank" rel="noopener noreferrer" href={project.url}>
                  <FontAwesomeIcon
                    style={{ fontSize: "32px", color: "white" }}
                    icon={faGithub}
                  />
                </a>
              </h6>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ProjectList({ projects }) {
  const { setProjectsRef } = useContext(ScrollContext);
  const projectRef = useRef(null);

  useEffect(() => {
    setProjectsRef(projectRef.current);
  }, [setProjectsRef]);
  return (
    <>
      <div ref={projectRef} className={style["projects-wrapper"]}>
        <h1
          style={{
            color: "white",
            textAlign: "left",
            paddingTop: "40px",
            paddingLeft: "200px",
            fontSize: "50px",
          }}
        >
          Projects
        </h1>
        <p
          style={{
            color: "white",
            textAlign: "left",
            margin: "40px auto",
            fontSize: "24px",
            fontWeight: "300",
            marginLeft: "200px",
          }}
        >
          Here are some pieces of my web art
        </p>
        {projects.map((project, index) => (
          <Projects
            key={project.id}
            project={project}
            reverseLayout={index % 2 === 1}
          />
        ))}
      </div>
    </>
  );
}
