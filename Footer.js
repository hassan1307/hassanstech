import React, { useEffect, useRef, useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import {FiFacebook,FiInstagram,FiGithub,FiTwitter,FiLinkedin} from 'react-icons/fi'
import { useGlobalContext } from './Context'
import "./Footer.css"
const Footer = () => {
    const { brand } = useGlobalContext();
    const imageRocket = useRef();

    const [rocket, setRocket] = useState(false);
        const rocketClick = () => {
        brand.current.scrollIntoView({ behavior: 'smooth' });
        // imageRocket.current.style.transition = "all 0.002s";
        // imageRocket.current.style.transform = "translateY(-100%)";
        // imageRocket.current.style.transform = "rotate(-45deg)";
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 500) {
                setRocket(true);
                imageRocket.current.style.transition = "all 1s";
                imageRocket.current.style.opacity = "1";

            } else {
                setRocket(false);
                imageRocket.current.style.transition = "all 1s";
                imageRocket.current.style.opacity = "0";
            }
        })
    },[])

    return (
        <>
            <footer>
                <h1 id="rocket" onClick={rocketClick}>{rocket?<img ref={imageRocket} src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f680.png" alt="" />:null}</h1>
            </footer>
        </>
)
}

export default Footer
