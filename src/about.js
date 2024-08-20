import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';

function About() {
  return (
    <div className="container-fluid contact-container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="info-section p-4">
            <h1 className="about-title">About Me</h1>
            <p>
              Hello! My name is <strong>Shiva Kumar Marthand</strong>, and I'm currently seeking a role in <strong>Software Engineering</strong>.
            </p>
            <p>Completed an internship at Vcube Software Solutions.</p>
            
            <h2 className="info-title">Education</h2>
            <p className="info-text">
              B.Tech with a grade of 61% from Narasimha Reddy Engineering College.
            </p>
            
            <h2 className="info-title">Address</h2>
            <p className="info-text">
              502300 Isnapur Sanagreddy,<br />Hyderabad, India
            </p>
            
            <h2 className="info-title">Phone</h2>
            <p className="info-text">
              +91 9505608974
            </p>
            
            <h2 className="info-title">Email</h2>
            <p className="info-text">
              shivayadav12088@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
