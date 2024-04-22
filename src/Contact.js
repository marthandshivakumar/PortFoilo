import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';

function Contact() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center ">
        <div className="col-md-8 mt-4">
          <div className="about-section text-center">
            <h1>About</h1>
            <p>
              Hello! My name is <strong>Shiva Kumar Marthand</strong>, and I'm currently looking for a role in <strong>Software Engineering</strong>.
            </p>
            <p>Completed an internship at Vcube Software Solutions.</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Education</h2>
                <p className="card-text">
                  I have completed my B.Tech with a grade of 61% from Narasimha Reddy Engineering College.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Address</h2>
                <p className="card-text">
                  502300 I snapur Sanagreddy,<br />Hyderabad, India
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Phone</h2>
                <p className="card-text">
                  +91 9505608974
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Email</h2>
                <p className="card-text">
                  shivayadav12088@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
