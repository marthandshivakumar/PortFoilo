import React from "react";
import './Main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import FrontImage from './photo.jpg'; // Replace with your front image
import BackImage from './pic.jpg'; // Replace with your back image

function Main() {
    return (
        <div className="diagonal-background" id="home">
            <div className="content">
                <div className="image-container">
                    <div className="image-card">
                        <div className="image-side front">
                            <img src={FrontImage} alt="Front" className="image" />
                        </div>
                        <div className="image-side back">
                            <img src={BackImage} alt="Back" className="image" />
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    <h1>Hi, I am</h1>
                    <h2>SHIVA KUMAR MARTHAND</h2>
                    <p>Welcome to my portfolio</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/shiva-kumar-0464a628b/" target="_blank" rel="noopener noreferrer" className="text-primary">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://github.com/marthandshivakumar" target="_blank" rel="noopener noreferrer" className="text-dark">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a href="https://www.instagram.com/marthand_shiva_yadav_024/" className="text-danger">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
