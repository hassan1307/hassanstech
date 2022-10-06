import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import "./aboutme.css"
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { Timeline } from 'gsap/gsap-core';
import { useGlobalContext } from './Context';
gsap.registerPlugin(ScrollTrigger)
const AboutMe = () => {
    const { about } = useGlobalContext();
    useEffect(() => {
        gsap.from(".styling", {
            opacity: 0,
            y: -30,
            duration:2,
            scrollTrigger: {
                trigger:".styling",
                start: "50% 90%",
            }
        })
        gsap.from(".myImage", {
            y: 30,
            opacity: 0,
            duration: 2,
            scale:0.8,
            scrollTrigger: {
                trigger:".myImage",
                start: "50% 95%",

            }
        })
        gsap.from(".myInfo", {
            x: 30,
            opacity: 0,
            duration: 2,
            scrollTrigger: { 
                trigger:".myInfo",
                start: "50% 80%",

            }
        })
    } , [])

    return (
        <>
        <div className="styles" style={{
                    width:"100vw",
                    // marginRight:"auto",
                    marginLeft:"0",
                    padding:"1rem",
                    display:"flex",
                    alignItems: "center",
                justifyContent: "center",
                    marginTop:"6rem"
                    
                    // justifyContent:"space-between"
                }}>
                <div className="lines" style={{
                    marginRight: "1rem",
                    marginLeft:"auto"
                    }}></div>
                <div className="tex" style={{
                    color: "white",
                    order: "2",
                    marginRight:'2rem'
                    }}>About Me</div>
                </div>
            <section id="aboutme" ref={about}>
                {/* <div className="styling">
                    <div className="line"></div>
                    <div className="text">About</div>
                </div> */}
                <div className="info">
                    <div className="myImage">
                        <img src={require("./hassan.jpg")} alt=""/>
                    <div className="blob-image" ></div>
                    </div>
                    <div className="myInfo">
                        <p>
                            Peace be upon you. I am <span id="green">Hassan Tariq</span>  & I'm a Software Engineer!
                            I was exposed to Technical World, when I was unable to get into Mechanical Engineering,and
                            trust me this was the best thing that has happened to me! I really like competetive Programming,
                            the logic building and the thrill that it brings is Unparallel!
                            <br /><br />
                            Ok! so, my web development journey started back in 2020 I guess. I started 
                            taking a web development bootcamp by <span id="green">Angela Yu</span>!  She's the best! The way she 
                            teaches thing is fantabulous! But things happened and i somehow lost my interest in
                            web development and it came to a hault! Then, something happened, an inner voice told
                            me to go back, go back to this amazing thing, and then I seriously got into it, I started learning
                            React js from <span id='green'>John Smilga</span> , and let me tell you something, he's the best thing that has ever happened
                            to Web Development!
                        </p>
                    </div>
                </div>
            </section>
        </>
)
}

export default AboutMe
