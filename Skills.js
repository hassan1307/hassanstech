import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './Context'
import { myskills } from './myskills'
import "./skills.css"
import "./skillsmodel.css"
import SkillsModel from './SkillsModel'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { Timeline } from 'gsap/gsap-core';
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)
const Skills = () => {
    useEffect(() => {
        gsap.from(".single-card", {
                y: 30,
                opacity: 0,
                duration: 1,
                // stagger:0.4,
                scale: 0,
                // stagger:0.2,
                scrollTrigger: {
                    trigger:".single-card",
                    start: "50% 95%",
                }
            })
        gsap.from(".styles", {
                x: 30,
                opacity: 0,
                duration: 2,
                x:-20,
                // stagger:0.2,
                scrollTrigger: {
                    trigger:".styles",
                    start: "50% 95%",
                }
            })
    },[])
    return (
    <>
            <div className="styles" style={{
                    width:"100vw",
                    // marginRight:"auto",
                    marginLeft:"0",
                    padding:"1rem",
                    marginRight:"auto",
                    display:"flex",
                    alignItems: "center",
                    marginLeft:"2rem",
                justifyContent: "center",
                    marginTop:"2rem"
                    
                    // justifyContent:"space-between"
                }}>
                <div className="lines" style={{
                    marginLeft: "1rem",
                    marginRight:"auto"
                    }}></div>
                <div className="tex" style={{
                        // width:"50%",
                        color:"white"
                    }}>Technologies I'm working on!</div>
                </div>
            <section id="skills">
                    {myskills.map((skills) => {
                        const { id, icon, name } = skills;
                        return (
                            <>
                        
                                
                            <div className="single-card" key={id}>
                                    
                                <div className="skill-icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="skill-name" >
                                    <p>{name}</p>
                                </div>
                            </div>
                            </>
                        )
                    })}
            </section>
    </>
)
}

export default Skills
