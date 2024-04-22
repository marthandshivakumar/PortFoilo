// Projects.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css'

const projects = [
  {
    imgSrc: "https://www.replicon.com/wp-assets/uploads/2022/07/Advantages-CRM-Project-Management-banner.png",
    title: "CRM",
    description: "Customer Relationship Management",
    additionalInfo: "Additional information about CRM.",
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSP4AX1jF_SimT74qIDQpwHKYImyuLvOktdw&usqp=CAU",
    title: "E-commerce",
    description: "E-commerce platform development",
    additionalInfo: "Additional information about E-commerce.",
  },
  {
    imgSrc: "https://i0.wp.com/tele.net.in/wp-content/uploads/2021/07/bharatNet-bid.png?fit=300%2C168&ssl=1w",
    title: "Tender Proposal",
    description: "Tender proposal submission system",
    additionalInfo: "Additional information about Tender Proposal.",
  },
  // Add more projects as needed
];

const ProjectCard = ({ imgSrc, title, description, additionalInfo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="col-md-4" id='project'>
      <div
        className={`card ${isFlipped ? 'is-flipped' : ''}`}
        style={{ height: '400px', width: '350px', marginLeft: "15px",}}
        onClick={flipCard}
      >
        <div className="card-inner">
          <div className="card-front">
            <img className="card-img-top " src={imgSrc} alt="" />
            <div className="card-body">
              <div className="card-title">{title}</div>
              <div className="card-text">{description}</div>
            </div>
          </div>
          <div className="card-back">
            <div className="card-body" >
              <div className="card-title ">{title}</div>
              <div className="card-text">{additionalInfo}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <div className="container-fluid text-dark pt-4" id="projects">
    <div className="row">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          additionalInfo={project.additionalInfo}
        />
      ))}
    </div>
  </div>
);

export default Projects;
