import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {useRef, useEffect, useContext} from 'react';
import { ScrollContext } from "@/pages/scrollContext";
export default function Contact() {
    const {setContactRef} = useContext(ScrollContext);
    const contactRef = useRef(null);
    useEffect(() => {
        setContactRef(contactRef.current);
    })
  return (
    <div ref={contactRef} className={style["contact-wrapper"]}>
        <div className={style['social-icons']}>
        <a target='_blank' href="https://www.linkedin.com/in/nikola-culic-19b408242/">
          <FontAwesomeIcon icon={faLinkedin} className={style['icon']} />
        </a>
        <a target='_blank' href="https://github.com/Culic96">
          <FontAwesomeIcon icon={faGithub} className={style['icon']} />
        </a>
        <h5>or
        </h5>
        <FontAwesomeIcon icon={faEnvelope} className={style['icon']} />

        <h5>nikola.culic96@gmail.com</h5>

        </div>

    </div>
  );
}
