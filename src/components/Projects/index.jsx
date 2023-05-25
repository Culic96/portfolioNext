import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useContext, useEffect, useState } from "react";
import { ScrollContext } from "@/pages/scrollContext";

export function Projects({ project, reverseLayout }) {
  const [currentPicturePointer, setCurrentPicturePointer] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [direction, setDirection] = useState("");

  const getNextPicture = () => {
    if (currentPicturePointer === project.images.length - 1) {
      setCurrentPicturePointer(0);
      setAnimate(true);
      setDirection("next");
    } else {
      setCurrentPicturePointer((prevPointer) => prevPointer + 1);
      setAnimate(true);
      setDirection("next");
    }
  };

  const getPreviousPicture = () => {
    if (currentPicturePointer === 0) {
      setCurrentPicturePointer(project.images.length - 1);
      setAnimate(true);
      setDirection("prev");
    } else {
      setCurrentPicturePointer((prevPointer) => prevPointer - 1);
      setAnimate(true);
      setDirection("prev");
    }
  };

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setAnimate(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [animate]);

  return (
    <div className={style["project-wrapper"]}>
      <div
        className={`${style["project"]} ${
          reverseLayout ? style["project-reverse"] : ""
        }`}
      >
        <div className={style["project-background-holder"]}>
          <div className={style["project-background"]}>
            <div className={style["arrowLeft"]}>
              <FontAwesomeIcon
                onClick={() => getPreviousPicture()}
                icon={faArrowCircleLeft}
              />
            </div>
            <div className={style["arrowRight"]}>
              <FontAwesomeIcon
                onClick={() => getNextPicture()}
                icon={faArrowCircleRight}
              />
            </div>
            <div
              className={style["project-images-container"]}
              style={{
                transform: `translateX(-${currentPicturePointer * 100}%)`,
              }}
            >
              {project.images.map((image, index) => (
                <img
                  key={index}
                  className={style["project-image"]}
                  src={image.url}
                  alt="Project Image"
                />
              ))}
            </div>
          </div>
        </div>
        <div className={style["project-desc"]}>
          <h2 className={style["project-desc-title"]}>{project.title}</h2>
          <p className={style["project-desc-text"]}>{project.desc}</p>
          <h6 className={style["project-desc-tech"]}>{project.tech}</h6>
          <h6 className={style["project-desc-code"]}>
            Code
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.url}
            >
              <FontAwesomeIcon
                style={{ fontSize: "32px", color: "white" }}
                icon={faGithub}
              />
            </a>
          </h6>
        </div>
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
        <h1 className={style["project-heading"]}>Projects</h1>
        <p className={style["project-subheading"]}>
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