import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {useRef, useEffect, useContext} from "react";
import { ScrollContext } from "@/pages/scrollContext";
export function Hero (){
const {setHeroRef} = useContext(ScrollContext);
const heroRef = useRef(null);
useEffect(() => {
    setHeroRef(heroRef.current)
},[setHeroRef])
    return (
        <>
        <div ref={heroRef} className={styles['hero-wrapper']}>
           <div className={styles['content-wrapper']}>
               <div className={styles['hero-text']}>
                    <h1>Front-end react developer</h1>
                    <h3>I'm Nikola Culic, a passionate Front-end react developer, based in Sremska Mitrovica, Serbia</h3>
                    <h3>You can find me here</h3>
                    <div className={styles['hero-social']}>
                    <a target='_blank' href="https://www.linkedin.com/in/nikola-culic-19b408242/">
                    <FontAwesomeIcon icon={faLinkedin} className={styles['icon']}/>
                    </a>
                    <a target='_blank' href="https://github.com/Culic96">
                    <FontAwesomeIcon className={styles['icon']} icon={faGithub}/>
                    </a>
                    </div>
               </div>
               <div className={styles['hero-image-wrapper']}>
               <div className={styles['hero-image']}/>
               </div>
           </div>
        </div>
        </>
        )
} 