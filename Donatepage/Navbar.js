import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <div>
            <nav className="navbar">
                <img src="Images/logo.png" className='logo' />
                <ul className={isMobile? "links-mobile": "links"}
                onClick={() => setIsMobile(false)}
                >

                    <li className="home" >Home</li>
                    <li className="rescue">Rescue Mission</li>
                    <li className="event">Event</li>
                    <li className="about">About</li>
                    <li className="contact">Contact</li>
                    <button className="btn">Donate Now</button>
                </ul>
                <button className="mobile-menu-icon"
                onClick={()=> setIsMobile(!isMobile)}
                >
                    {isMobile ? (
                    <i className="fas fa-times"></i>):
                    (
                        <i className="fas fa-bars"></i>
                    )
                   
                    }
                </button>

            </nav>
        </div>
    )
}

export default Navbar

