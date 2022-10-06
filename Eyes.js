import React, { useEffect } from 'react'
import "./eyes.css"
import {FaReact,FaGithub,FaCss3Alt,FaHtml5,FaBootstrap} from 'react-icons/fa'
import {SiFirebase,SiTailwindcss,SiJavascript} from 'react-icons/si'
const Eyes = () => {
    useEffect(() => {
        const eye = document.querySelectorAll('.iris');
        eye.forEach((icon) => {    
            window.addEventListener('mousemove', (event) => {
            const x = -(window.innerWidth / 2 - event.pageX) / 35;
            const y = -(window.innerHeight / 2 - event.pageY) / 35;
            icon.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;         
                }); 
        })
        eye.forEach((icon) => {    
            window.removeEventListener('mousemove', (event) => {
            const x = -(window.innerWidth / 2 - event.pageX) / 35;
            const y = -(window.innerHeight / 2 - event.pageY) / 35;
            icon.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;         
                }); 
        })


    },[])
    
    useEffect(() => {
        const eye = document.querySelectorAll('.iris-right');
        eye.forEach((icon) => {    
            window.addEventListener('mousemove', (event) => {
            const x = (window.innerWidth / 2 - event.pageX) / 35;
            const y = (window.innerHeight / 2 - event.pageY) / 35;
            icon.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;         
            })
            eye.forEach((icon) => {    
            window.removeEventListener('mousemove', (event) => {
            const x = -(window.innerWidth / 2 - event.pageX) / 35;
            const y = -(window.innerHeight / 2 - event.pageY) / 35;
            icon.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;         
                }); 
        })
        })

    },[])
    return (
        <>
        
        <div className="iris firebase-top">
            <SiFirebase/>
        </div>
        <div className="iris css-top">
            <FaCss3Alt/>
        </div>
        <div className="iris css-right2">
            <FaCss3Alt/>
        </div>
        <div className="iris html-top">
            <FaHtml5/>
        </div>
        <div className="iris react-top">
            <FaReact/>
        </div>
        <div className="iris react">
            <FaReact/>
        </div>
        <div className="iris tailwind-top iris-right">
            <SiTailwindcss/>
        </div>
        <div className="iris tailwind-right iris-right">
            <SiTailwindcss/>
        </div>
        <div className="iris react-right iris-right">
            <FaReact/>
        </div>
        <div className="iris javascript">
            <SiJavascript/>
        </div>
        <div className="iris javascript-right iris-right">
            <SiJavascript/>
        </div>
        <div className="iris javascript-top iris-right">
            <SiJavascript/>
        </div>
        <div className="iris firebase">
            <SiFirebase/>
        </div>
            <div className="iris tailwind-bottom-right">
            <SiTailwindcss/>
        </div>
        <div className="iris firebase-right iris-right">
            <SiFirebase/>
        </div>
        <div className="iris html">
            <FaHtml5/>
        </div>
        <div className="iris html-right iris-right">
            <FaHtml5/>
        </div>
        <div className="iris css">
            <FaCss3Alt/>
        </div>
        <div className="iris css-right">
            <FaCss3Alt/>
        </div>
        <div className="iris gsap">
            <FaBootstrap/>
        </div>
        <div className="iris gsap-right iris-right">
            <FaBootstrap/>
        </div>
        <div className="iris gsap-top-right iris-right">
            <FaBootstrap/>
        </div>
        <div className="iris gsap-top iris">
            <FaBootstrap/>
        </div>
        <div className="iris tailwind">
            <SiTailwindcss/>
        </div>
        <div className="iris tailwind-right2 iris-right">
            <SiTailwindcss/>
        </div>
            <div className="iris github">
                <FaGithub/>
        </div>
            <div className="iris github-right">
                <FaGithub/>
        </div>
            <div className="iris github-left iris-right">
                <FaGithub/>
        </div>


        </>
)
}

export default Eyes
