import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core'
import React, { useEffect } from 'react'
import { useGlobalContext } from './Context'
import {AiOutlineClose} from 'react-icons/ai'
import {GrDownload} from 'react-icons/gr'

import './cv.css'
const CV = () => {
    // creating pdf link using built-in method
    const downloadFile = () => {
        fetch("Resume.pdf").then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "Resume (2).pdf"
                alink.click();
            })
        })
    }
    const { cv, setCv } = useGlobalContext();
    return (
        <>
            <section className={`${cv?'show-cv':'hide-cv'}`}>
                <div className="cv-image">
                    <img src={require("./WhatsApp Image 2022-10-02 at 8.22.45 PM.jpeg")} alt="Resume" />
                <div className="download-btn" onClick={downloadFile}>
                  <GrDownload/> 
                </div>
                </div>
                <div className="button">
                    <button onClick={()=>setCv(false)}><AiOutlineClose/></button>
                </div>
               
            </section>
        </>
)
}

export default CV
