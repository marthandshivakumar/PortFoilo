import React from "react";
import Photo from './photo.jpg';
import './Main.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Main() {
    return (
        <div className="diagonal-background" id="home">
            <div className="content">
                <div className="img-container">
                    <img src={Photo} alt="img-fluid" className="img-fluid" id="photo" />
                </div>
                <div className="text-container">
                    <h1>Hi, I am</h1>
                    <h2>SHIVA MARTHAND</h2>
                    <p>Welcome to my portfolio</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/shiva-kumar-0464a628b/" target="_blank" className="text-primary">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://github.com/marthandshivakumar" target="_blank" className="text-dark">
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
