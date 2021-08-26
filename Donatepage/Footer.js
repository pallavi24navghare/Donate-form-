import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='Footer'>
            

            <div className='declaration'>
            <img src="Images/logo.png" className='logo1'/>
                <p className='disc'>We are a nonprofit organization fighting poverty, disease, and inequity around the world.</p>
               
                <p className='rights'>© 2021 Friends of Animal. All rights reserved</p>
            </div>

            <div className='social-media-links-2'>
            <h5>Organization</h5>
                <p>Way to Donate</p>
                <p>Get Involve</p>
                <p>About Us</p>
                <p>Sponsors</p>
                
                
            </div>
              
            <div className='social-media-links'>
            <h5>Additional Information</h5>
                <p>Contact</p>
                <p>Privacy Statement</p>
                <p>Condition of Use</p>
                <p>Disclosure</p>
                
                
            </div>
            <div className='social-media-links-1'>
                <h5>Reach</h5>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>twitter</p>
                <p>Linkdin</p>
                
            </div>
        </div>
    )
}

export default Footer
