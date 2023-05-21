import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Roulette app",
      tech: 'HTML CSS JS',
      desc: "This is the first app that i have made. After studying Javascript for three months I thought to test what I have learn which is represented in this project.It is a simple app made with HTML, CSS and JS. The user can enter the amounth of chips he wishes to spend then add chips to the table and choose his lucky numbers.",
    },
    {
      id: 2,
      title: "Todo app",
      tech: 'NextJS Firebase Styled Components',
      desc: "My first ever project made with NextJS, Typescript and Firebase. In this project I have also used Styled Components. It is a simple CRUD app, where user can Login, create todo cards, edit his profile, search for specific card and so on. Note: This project is not entirely finished and there is a lot of space for expansion.",
    },
    {
      id: 3,
      title: "Quizz app",
      tech: 'NextJS MUI',
      desc: "This is the app that uses trivia API. User enters his name, and then he can choose which topic suits him best. There are easy, normal, and hard questions. Currently we save data into the local storage, later I will add Node JS, also this project is not entirely finished, and have a lot of space for expansion.",
    },
  ];

  return (
    <>
      <div className={style["projects-wrapper"]}>
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
          Here are some pieces off my web art
        </p>
        {projects.map((project) => {
          if (project.id % 2 !== 0) {
            return (
              <div className={style["project"]}>
                <div className={style["project-background"]}></div>
                <div className={style["project-desc"]}>
                  <h2 className={style["project-desc-title"]}>{project.title}</h2>
                  <p className={style["project-desc-text"]}>
                   {project.desc}
                  </p>
                  <h6 className={style["project-desc-tech"]}>
                    {project.tech}
                  </h6>
                  <h6 className={style["project-desc-code"]}>
                    Code
                    <a href="https://github.com/Culic96/roulette-demo-js">
                     
                      <FontAwesomeIcon
                        style={{ fontSize: "32px", color: "white" }}
                        icon={faGithub}
                      />
                    </a>
                  </h6>
                </div>
              </div>
            );
          } else {
            return (
            <div className={style["project"]}>
              <div className={style["project-desc"]}>
                <h2 className={style["project-desc-title"]}>{project.title}</h2>
                <p className={style["project-desc-text"]}>
                {project.desc}
                </p>
                <h6 className={style["project-desc-tech"]}>
                  {project.tech}
                </h6>
                <h6 className={style["project-desc-code"]}>
                  Code
                  <a href="https://github.com/Culic96/roulette-demo-js">
                    <FontAwesomeIcon
                      style={{ fontSize: "32px", color: "white" }}
                      icon={faGithub}
                    />
                  </a>
                </h6>
              </div>
              <div className={style["project-background"]}></div>
            </div>
            )
          }
        })}
      </div>
    </>
  );
}
