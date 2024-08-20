import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

const projects = [
  {
    imgSrc: "https://www.replicon.com/wp-assets/uploads/2022/07/Advantages-CRM-Project-Management-banner.png",
    title: "CRM",
    description: "Customer Relationship Management",
    additionalInfo: "Developed student authentication, managed student info like marks, interviews, tests, and attendance for both students and staff, segregated branch-wise. Implemented features for enrolling and adding students.",
    link: "https://github.com/marthandshivakumar/vcube",
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSP4AX1jF_SimT74qIDQpwHKYImyuLvOktdw&usqp=CAU",
    title: "E-commerce",
    description: "E-commerce platform development",
    additionalInfo: "Worked on creating a responsive and scalable E-commerce website, focusing on user-friendly interfaces and secure transaction processing.",
    link: "https://github.com/marthandshivakumar/ez",
  },
  {
    imgSrc: "https://i0.wp.com/tele.net.in/wp-content/uploads/2021/07/bharatNet-bid.png?fit=300%2C168&ssl=1w",
    title: "Tender Proposal",
    description: "Tender proposal submission system",
    additionalInfo: "Developed a system for the submission and management of tender proposals, facilitating bid processes for various projects.",
    link: "https://github.com/marthandshivakumar/Tender_propsals",
  },
  // Add more projects as needed
];

const ProjectCard = ({ imgSrc, title, description, additionalInfo, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="col-md-4" id='project'>
      <div
        className={`card ${isFlipped ? 'is-flipped' : ''}`}
        onClick={flipCard}
      >
        <div className="card-inner">
          <div className="card-front">
            <img className="card-img-top" src={imgSrc} alt="" />
            <div className="card-body">
              <div className="card-title">{title}</div>
              <div className="card-text">{description}</div>
            </div>
          </div>
          <div className="card-back">
            <div className="card-body">
              <div className="card-title">{title}</div>
              <div className="card-text">{additionalInfo}</div>
              <a href={link} className="card-link">View Project</a>
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
          link={project.link}
        />
      ))}
    </div>
  </div>
);

export default Projects;
