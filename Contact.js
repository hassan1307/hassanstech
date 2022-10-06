import React, { useRef, useState } from 'react'
import "./contact.css"
import {FiLoader, FiSend} from 'react-icons/fi'
import { useGlobalContext } from './Context'
import emailjs, { send } from '@emailjs/browser';
import {MdOutlineFileDownloadDone} from 'react-icons/md'
import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import gsap from 'gsap';
const Contact = () => {
    const { contact } = useGlobalContext();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sendBtn, setSendBtn] = useState("submit");
    const [error, setError] = useState("");
    const [isSent, setIsSent] = useState(true);
    const [sentMsg, setSentMsg] = useState('');
    const form = useRef()
    useEffect(() => {
        gsap.from(".names", {
            opacity: 0,
            y: 30,
            duration:2,
            scrollTrigger: {
                trigger: "#contact-form",
            }
        })
        gsap.from(".email", {
            opacity: 0,
            delay:0.5,
            y: 30,
            duration:2,
            scrollTrigger: {
                trigger:"#contact-form",
            }
        })
        gsap.from("textarea", {
            opacity: 0,
            duration: 2,
            delay:0.7,
            y:30,
            scrollTrigger: {
                trigger:"#contact-form",
            }
        })
        gsap.from(".btn", {
            opacity: 0,
            y:30,
            duration: 2,
            delay:0.9,
            scrollTrigger: {
                trigger:"#contact-form",
            }
        })
    },[])
    const sendEmail = (e) => {
    e.preventDefault();
        setIsSent(false);
    emailjs.sendForm('service_7rpilqy', 'template_fqwi4eh', form.current, 'ZL2tx_OWTuSEhPxD9')
        .then((result) => {
            setName('')
            setEmail('')
            setMessage('')
            setIsSent(true);
            setSentMsg('Message delivered Successfully!')
            // alert("Message Delivered!");
            setTimeout(() => {
                setSentMsg('');
            }, 5000);
        }, (error) => {
            setTimeout(() => {
                setError('');
            }, 5000);
            setError("There was an Error! Try again");
            setIsSent(true);
            setName('')
            setEmail('')
            setMessage('')
    });
    };
    return (
        <>
            <section id="contact-form">
                <div className="styles new" ref={contact} style={{
                    width:"100vw",
                    padding:"1rem",
                    marginRight:"auto",
                    display: "flex",
                    marginTop:"5rem",
                    alignItems: "center",
                    marginLeft:"2rem",
                justifyContent: "center",
                    
                }}>
                <div className="lines" style={{
                    marginLeft: "1rem",
                    marginRight:"auto"
                    }}></div>
                <div className="tex" style={{
                        // width:"50%",
                        color:"white"
                    }}>Contact Me!</div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                <div className="names">
                        <input type="text"
                        required
                        name="user_name"
                            placeholder='Name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                </div>
                <div className="email">
                        <input type="email"
                        required
                        name="user_email"
                        placeholder='Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                </div>
                    <div className="message">
                        <textarea name="message" id="" cols="30" rows="10"
                            placeholder='Your Message...'
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                            required
                        ></textarea>            
                        <h5 style={{color:"red",marginBottom:"1rem"}}>{error}</h5>
                        <h5 style={{color:"green",marginBottom:"1rem"}}>{sentMsg}</h5>
                        <div className="send-msg">
                            {isSent? <input className='btn' type="submit"/>:<FiLoader/>}
                        </div>
                </div>
                </form>
                
            </section>
        </>
)
}

export default Contact
