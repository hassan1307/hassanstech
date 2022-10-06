import gsap from 'gsap';
import React, { useContext, createContext, useRef, useState, useEffect } from 'react'
const StateContext = createContext();
export const StateProvider = ({ children }) => {
    const container = useRef(null)
    const myItems = useRef(null)
    const nameAnimation = useRef(null)
    const navContainer = useRef(null)
    const [cv,setCv] = useState(false)
    const [hidden, setHidden] = useState(true)
    const brand = useRef(null);
    const about = useRef(null);
    const home = useRef(null);
    const project = useRef(null);
    const contact = useRef(null);

    const hide = () => {
        // const containerAnimation = navContainer.current;
        // gsap.to(containerAnimation, {
        //     opacity: 0,
        //     scale: 0
        // })
    }
    const show = (e) => {
        e.preventDefault();
        setHidden(!hidden)
    }
    return <StateContext.Provider value={{
        container,
        show,
        hidden,
        setHidden,
        myItems,
        navContainer,
        hide,
        cv,
        setCv,
        home,
        about,
        contact,
        project,
        brand
    }}>
        {children}
    </StateContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(StateContext)
}