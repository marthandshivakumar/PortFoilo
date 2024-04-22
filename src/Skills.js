  // Skill.js

  import React from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './Projects.css'
  import './Skill.css';
  const skills = [
    {
      title: 'Python',
      description: 'Proficient in Python programming language.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    },
    {
      title: 'MySQL',
      description: 'Experience in working with MySQL databases.',
      imageUrl: 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png',
    },
    {
      title: 'Django',
      description: 'Skilled in Django web framework.',
      imageUrl: 'https://www.opengis.ch/wp-content/uploads/2020/04/django-python-logo.png',
    },
    {
      title: 'HTML',
      description: 'Strong knowledge of HTML for building web pages.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png',
    },
    {
      title: 'React.js',
      description: 'Proficient in building user interfaces with React.js.',
      imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    },
    {
      title: 'CSS',
      description: 'Experience in styling web pages with CSS and implement.',
      imageUrl: 'https://1000marcas.net/wp-content/uploads/2021/02/CSS-Logo.png',
    },
    {
      title: 'Bootstrap',
      description: 'Familiarity with the Bootstrap framework for responsive design.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png',
    },
    {
      title: 'JavaScript',
      description: 'Strong skills in JavaScript for client-side scripting.',
      imageUrl: 'https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png',
    },
    {
      title: 'REST API',
      description: 'Experience in designing and consuming RESTful APIs.',
      imageUrl: 'https://tomaztsql.files.wordpress.com/2021/08/restapi2.png',
    },
    // Add more skills as needed
  ];

  const Skill = () => {
    return (
      <div className="container-fuild ">
        <h1 className="mb-4">Skills</h1>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img
                src={skill.imageUrl}
                alt={skill.title}
                className="skill-image"
              />
              <div className="skill-content">
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };



  
  export default Skill;
