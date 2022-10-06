import React, { useEffect, useRef } from 'react'
import "./frontpage.css"
import Typed from 'react-typed'
import {FiInstagram,FiGithub,FiTwitter,FiLinkedin} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import { useGlobalContext } from './Context'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { TimelineLite } from 'gsap/gsap-core'
import { Timeline } from 'gsap/gsap-core'
gsap.registerPlugin(ScrollTrigger)
const FrontPage = () => {
    const singleIcon = useRef();
    const myIcons = useRef();
    const { home } = useGlobalContext();
    const t1 = new Timeline({delay:1})
    useEffect(() => {
        t1.staggerFrom(".main-head", 1, {
            x: 20,
            opacity: 0,
            duraiton:3
        }).from(".intro", {
            y: 10,
            opacity: 0,
            delay:0.3,
            duraiton:2
        }).from(".icon-image", {
            stagger: 0.2,
            opacity: 0,
            duraiton:3,
            ease:"power",
            y:30,
        })
    },[])



    return (
        <>
            <section id='front' ref={home}>
                <div className="main-head">
                    <div className="welcome">
                    <h1>Hey ! I'm</h1>
                    </div>
                    <div className="name">
                        <h1>Hassan Tariq</h1>
                    </div>
                </div>
                <div className="typing">
                    <Typed
                        strings={
                            [
                                "Student",
                                "Enthusiast",
                                "Tech Nerd",
                                "Web Designer",
                                "Web Developer",
                                "PHP developer",
                                "Mobile Developer",
                                "Node js developer",
                                "MERN stack developer"

                            ]
                        }
                        typeSpeed={70}
                        backSpeed={30}
                        loop
                    />
                </div>
                <div className="intro" >
                    <p>
                        A Web developer specialized in making Full Stack WebApps, using the most popular Teck Stacks in demand! My DNA's a little different since coding is being encoded in it! 
                    </p>
                </div>
                <div className="social" ref={myIcons}>
                    <div className="icon" ref={singleIcon}>
                        <div className="text">
                            <p>Whatsapp</p>
                        </div>
                        <div className="icon-image">
                            <a href="tel:+923151248441" target="blank"><BsWhatsapp/></a> 
                        </div>
                    </div>
                    <div className="icon" ref={singleIcon}>
                        <div className="text">
                            <p>Instagram</p>
                        </div>
                        <div className="icon-image">
                        <a href="https://www.instagram.com/ht0_0/" target="blank"><FiInstagram/></a> 
                        </div>
                    </div>
                    <div className="icon" ref={singleIcon}>
                        <div className="text">
                            <p>LinkedIn Profile</p>
                        </div>
                        <div className="icon-image">
                        <a href="https://www.linkedin.com/in/hassan-tariq-588543246/" target="blank"><FiLinkedin/></a> 
                        </div>
                    </div>
                    <div className="icon" ref={singleIcon}>
                        <div className="text">
                            <p>GitHub</p>
                        </div>
                        <div className="icon-image" ref={singleIcon}>
                        <a href="https://github.com/hassan1307" target="blank"><FiGithub/></a> 
                        </div>
                    </div>
                    <div className="icon" ref={singleIcon}>
                        <div className="text">
                            <p>Twitter</p>
                        </div>
                        <div className="icon-image">
                        <a href="https://twitter.com/hsuntariq" target="blank"><FiTwitter/></a> 
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
)
}

export default FrontPage
