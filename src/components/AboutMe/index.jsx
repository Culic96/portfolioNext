import { useEffect, useState, useRef, useContext } from "react";
import styles from "./style.module.css";
import { ScrollContext } from "../../pages/scrollContext";
export function AboutMe(){
    const [innerHeight, setInnerHeight] = useState(0);
    const { setAboutRef } = useContext(ScrollContext);
    const aboutRef = useRef(null);

useEffect(() => {
    setAboutRef(aboutRef.current);
    const handleHeight = () => {
        setInnerHeight(window.scrollY);
    };
    console.log(innerHeight);
    window.addEventListener('scroll', handleHeight);
    return () => {
        window.removeEventListener('scroll', handleHeight);
    };
}, [aboutRef])    
    return <>
    <div className={styles['about-wrapper']}>
        <div ref={aboutRef} className={styles['about-content-wrapper']}>
            {innerHeight > 210 &&
                <div className={styles['about-text']}>
                <h1 className={styles['about-heading']}>So, who am I?</h1>
                <h3>Something about me</h3>
                <p>My programing journey started at the end of 2021, since then I passed a long way from "Hello world" programs to be able to write smaller applications on my own. I have finished a "Mitrovacka Gimnazija" highschool informatics major in 2015.
                    Even though I finished informatics, my love story with the code came a bit later. Since I started to explore code more and more my hunger grew, and became one of the ordinary things in my day.
                </p>
            </div>
            }
        <div className={styles['about-image-wrapper']}>
            <div className={styles['about-image']}/>
        </div>
        </div>
    </div>
    </>
}