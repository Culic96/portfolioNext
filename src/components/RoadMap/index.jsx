import React from "react";
import styles from "./style.module.css";
import {useRef, useEffect, useContext} from 'react';
import { ScrollContext } from "../../pages/scrollContext";
const Roadmap = () => {

const descriptions = [
    {id: 1, desc: "The backbone of the web, HTML provides the structure and semantic markup for web pages, ensuring content is properly organized and accessible."},
    {id: 2, desc: "Cascading Style Sheets adds visual appeal and responsiveness to web pages, allowing for stunning designs and layout customization."},
    {id: 3, desc: "The universal language of the web, JavaScript empowers interactivity and dynamic functionality, enabling engaging user experiences and interactive web applications."},
    {id: 4, desc: "A powerful JavaScript library, React simplifies UI development by using reusable components and a virtual DOM, resulting in efficient and responsive web applications."},
    {id: 5, desc: "Built on JavaScript, TypeScript introduces static typing, enabling enhanced code scalability, better collaboration, and improved error detection in large-scale applications."},
    {id: 6, desc: "A comprehensive backend-as-a-service platform, Firebase provides developers with tools for authentication, real-time database, cloud storage, and more, simplifying backend development and enabling rapid prototyping and scaling of web and mobile applications."}
]
const {setRoadmapRef} = useContext(ScrollContext)
const roadmapRef = useRef(null)

 useEffect(() => {
  setRoadmapRef(roadmapRef.current)
 })

  return (
   <>
   <div ref={roadmapRef} className={styles["roadmap-wrapper"]}>
    <h1  style={{color: 'white', textAlign: 'left', paddingTop: '40px', paddingLeft: '200px', fontSize: '50px'}}>Road map</h1>
    <p style={{color: 'white', textAlign: 'left', margin: '40px auto', fontSize: '24px', fontWeight: '300', marginLeft: '200px'}}>This is my journey in to the programing</p>
    <div className={styles['divider']}>
        <div  className={styles['roadmap-technologies']}>
                <div className={styles['technology']}/>   
                <div className={styles['technology']}/>   
                <div className={styles['technology']}/>   
                <div className={styles['technology']}/>   
                <div className={styles['technology']}/>   
                <div className={styles['technology']}/>         
        </div>
    <div className={styles['roadmap-desc-holder']}>
        {descriptions.map((desc) => (
          <div className={styles['roadmap-desc']} key={desc.id}>
            <p>{desc.desc}</p>
          </div>
        ))}
    </div>
    </div>
   </div>
   </>
  );
};

export default Roadmap;