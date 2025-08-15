import React, { useState } from 'react'; // We will create this CSS file

// You can use an icon library like react-icons
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
        
    return (
        <div className="contact-us-container">
            <div className="contact-header">
                <h1>Get In Touch</h1>
                <p>We're here to help and answer any question you might have. We look forward to hearing from you!</p>
            </div>

            <div className="contact-layout">

                {/* Right Column: Contact Info */}
                <div className="contact-info-container">
                    <div className="info-box">
                        <h3>Contact Details</h3>
                        <p> {/* <FaMapMarkerAlt /> */}Brainware University</p>
                        <p> {/* <FaPhone /> */} 📞 <a >96473 97722</a></p>
                        <p> {/* <FaEnvelope /> */} ✉️ <a href="sksahilu735@gmail.com">sksahilu735@gmail.com</a></p>
                    </div>
                    <div className="info-box">
                        <h3>Opening Hours</h3>
                        <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                        <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
                        <p><strong>Sunday:</strong> Closed</p>
                    </div>
                    <div className="info-box">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook"> {/* <FaFacebook /> */} FB </a>
                            <a href="#" aria-label="Instagram"> {/* <FaInstagram /> */} IG </a>
                            <a href="#" aria-label="Twitter"> {/* <FaTwitter /> */} TW </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;