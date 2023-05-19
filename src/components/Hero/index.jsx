import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
export function Hero (){
    return (
        <>
        <div className={styles['hero-wrapper']}>
           <div className={styles['content-wrapper']}>
               <div className={styles['hero-text']}>
                    <h1>Front-end react developer</h1>
                    <h3>I'm Nikola Culic, a passionate Front-end react developer, based in Sremska Mitrovica, Serbia</h3>
                    <h3>You can find me here</h3>
                    <div className={styles['hero-social']}>
                    <a href="https://www.linkedin.com/in/nikola-culic-19b408242/">
                    <FontAwesomeIcon icon={faLinkedin} style={{color:"#fff"}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/nikola-culic-19b408242/">
                    <FontAwesomeIcon icon={faGithub} style={{color:"#fff"}}/>
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