import React, { useEffect, useRef, useState } from 'react'
import { navItems } from './navItems'
import "./nav.css"
import { useGlobalContext } from './Context'
import gsap from 'gsap'
import CV from './CV'
import { Timeline } from 'gsap/gsap-core'
import {AiOutlineClose} from 'react-icons/ai'
const Nav = () => {
    const { container,show,hidden,myItems,navContainer,cv,setCv,about,home,project,contact,brand } = useGlobalContext();
    const move = useRef(null)
    let t2 = new Timeline();
    useEffect(() => {
        gsap.from("nav", {
            yPercent: -100,
            duration: 2,
            opacity:0
        })
    })
    const check = (e) => {
        e.preventDefault()
        // animating the line
        if (e.target.textContent === 'Home') {
            home.current.scrollIntoView({behavior:'smooth'});
        } if (e.target.textContent === 'about') {
            about.current.scrollIntoView({behavior:'smooth'});
        }
        if (e.target.textContent === 'Project') {
            project.current.scrollIntoView({behavior:'smooth'});
        }
        if (e.target.textContent === 'contact') {
            contact.current.scrollIntoView({behavior:'smooth'});
            
        }
        if (e.target.textContent === 'Hassan') {
            brand.current.scrollIntoView({behavior:'smooth'});
        }
    }
    

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 200) {
            navContainer.current.style.background = "rgba(8,8,8)";
            navContainer.current.style.padding = "0 1rem";
            
        }else{
            navContainer.current.style.background = "rgba(8,8,8)";
            navContainer.current.style.padding = "1rem 2rem";
        }
    })


    return (
        <>
            <nav className={`${cv?'hide-nav':null}`} ref={navContainer}>
                <div className="brand" onClick={check} ref={brand}>
                    <h3>Hassan</h3>
                </div>
                 <div className="toggler" onClick={show}>
                    {!hidden?<AiOutlineClose/>:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><path xmlns="http://www.w3.org/2000/svg" d="M60.5 21h-49C6.813 21 3 17.187 3 12.5S6.813 4 11.5 4h49c4.687 0 8.5 3.813 8.5 8.5S65.187 21 60.5 21zm-49-13C9.019 8 7 10.019 7 12.5S9.019 17 11.5 17h49c2.481 0 4.5-2.019 4.5-4.5S62.981 8 60.5 8h-49zM52.5 68h-41C6.813 68 3 64.187 3 59.5S6.813 51 11.5 51h41c4.687 0 8.5 3.813 8.5 8.5S57.187 68 52.5 68zm-41-13C9.019 55 7 57.019 7 59.5S9.019 64 11.5 64h41c2.481 0 4.5-2.019 4.5-4.5S54.981 55 52.5 55h-41zM40.5 45h-29C6.813 45 3 41.187 3 36.5S6.813 28 11.5 28h29c4.687 0 8.5 3.813 8.5 8.5S45.187 45 40.5 45zm-29-13C9.019 32 7 34.019 7 36.5S9.019 41 11.5 41h29c2.481 0 4.5-2.019 4.5-4.5S42.981 32 40.5 32h-29z"></path></svg>}
                </div>
                <div ref={navContainer} className={`whole-nav ${!hidden?"show":"hide"}`} >
                    <div className="nav-items" ref={container} >
                    {navItems.map((item) => {
                        const {name,url,id } = item;
                        return (
                            <>
                                <div className="single-item" ref={myItems} onClick={check} key={id}>
                                    <a href={url}>{name}</a>
                                </div>
                            </>
                        )
                    })}
                </div>
                </div>
                <div className="resume">
                        <button onClick={()=>setCv(!cv)}>
                        <h3>Resume</h3>
                    </button>
                    </div>
                    
            </nav>
        </>
    )
}

export default Nav
