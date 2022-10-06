import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {FaCode} from 'react-icons/fa'
import {RiExternalLinkLine} from 'react-icons/ri'
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import './projects.css'
import { useGlobalContext } from "./Context";
import { Timeline } from "gsap/gsap-core";
import gsap from "gsap";
const Projects = () => {
    const { project } = useGlobalContext();
    
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
                    marginTop:"2rem"
                    
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
                    }}>Projects</div>
                </div>
            <div className="project-container" ref={project}>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        
        }}
        pagination={true}
        modules={[ EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        >
                            {/* Amazon */}
            <SwiperSlide>
                <div className="overlay-container">
                    <div className="title">
                        <h3>Amazon Clone</h3>
                    </div>
                <div className="technologies">
                    <p>React</p>
                    <p>Firebase</p>
                    <p>Firebase Authentication</p>
                    <p>React Icons</p>
                    <p>Firestore</p>
                    <p>UseReducer/Redux</p>
                </div>
            </div>
            <img id="myImg" src={require("./Screenshot (341).png")} alt="Amazon Clone" />
            <div className="icons">

                <a href="https://amazon-clone-hassan.netlify.app/" target="blank"><RiExternalLinkLine/></a>
            </div>
        </SwiperSlide>
            <SwiperSlide>
                <div className="overlay-container">
                    <div className="title">
                        <h3>Instagram Clone</h3>
                    </div>
                <div className="technologies">
                    <p>React</p>
                    <p>Firebase</p>
                    <p>Firebase Authentication</p>
                    <p>React Icons</p>
                    <p>Firestore</p>
                </div>
            </div>
            <img id="myImg" src={require("./Screenshot (335).png")} alt="Instagram Clone" />
            <div className="icons">

                <a href="https://hassansgram.netlify.app/" target="blank"><RiExternalLinkLine/></a>
            </div>
        </SwiperSlide>
            {/* second */}
            <SwiperSlide>
                <div className="overlay-container">
                    <div className="title">
                        <h3>Chat App</h3>
                    </div>
                <div className="technologies">
                    <p>React Icons</p>
                    <p>Firebase</p>
                    <p>Firebase Realtime databse</p>
                    <p>Firebase Authentication</p>
                    <p>Google Authentication</p>
                </div>
            </div>
            <img id="myImg" src={require("./WhatsApp Image 2022-09-26 at 7.38.33 PM.jpeg")} alt="Chat App" />
            <div className="icons">

                <a href="https://chatpatt.netlify.app/" target="blank"><RiExternalLinkLine/></a>
            </div>
                    </SwiperSlide>
                    {/* third */}
            <SwiperSlide>
                <div className="overlay-container">
                    <div className="title">
                        <h3>Tik-Tok Clone</h3>
                    </div>
                <div className="technologies">
                    <p>React</p>
                    <p>React Icons</p>
                </div>
            </div>
            <img id="myImg" src={require("./Screenshot (334).png")} alt="Tik-Tok" />
            <div className="icons">

                <a href="https:hassans-tiktok.netlify.app/" target="blank"><RiExternalLinkLine/></a>
            </div>
        </SwiperSlide>


         <SwiperSlide>
                <div className="overlay-container">
                    <div className="title">
                        <h3>Color-generator</h3>
                    </div>
                <div className="technologies">
                    <p>React</p>
                    <p>React-Icons</p>
                </div>
            </div>
            <img id="myImg" src={require("./Screenshot (336).png")} alt="Color generator" />
            <div className="icons">

                <a href="https:color-generator-hassan.netlify.app/" target="blank"><RiExternalLinkLine/></a>
            </div>
                    </SwiperSlide>

            <SwiperSlide>
                <div className="overlay-container">
                    <div className="title">
                        <h3>Tour's Data Fetch</h3>
                    </div>
                <div className="technologies">
                    <p>React</p>
                    <p>Custom API</p>
                </div>
            </div>
            <img id="myImg" src={require("./Screenshot (338).png")} alt="Tours" />
            <div className="icons">

                <a href="https://tour-app-hassan.netlify.app/" target="blank"><RiExternalLinkLine/></a>
            </div>
                    </SwiperSlide>
                    {/* fifth */}
         <SwiperSlide>
                <div className="overlay-container">
                    <div className="title">
                        <h3>Birthday Reminder</h3>
                    </div>
                <div className="technologies">
                    <p>React</p>
                    
                </div>
            </div>
            <img id="myImg" src={require("./Screenshot (337).png")} alt="birthday generator" />
            <div className="icons">

                <a href="https://bdays-reminder.netlify.app/" target="blank"><RiExternalLinkLine/></a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="overlay-container">
                    <div className="title">
                        <h3>Todo app</h3>
                    </div>
                <div className="technologies">
                    <p>React</p>
                    <p>Custom API</p>
                </div>
            </div>
            <img id="myImg" src={require("./Screenshot (339).png")} alt="Todo" />
            <div className="icons">

                <a href="https://todo-app-hassan.netlify.app/" target="blank"><RiExternalLinkLine/></a>
            </div>
                    </SwiperSlide>
        
        </Swiper>
            </div>

        </>
);
};

export default Projects
