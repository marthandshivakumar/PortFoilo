import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ProgressBar, Tooltip, OverlayTrigger, Card } from 'react-bootstrap';
import './Skill.css';

const skills = [
  {
    title: 'Python',
    rating: 90,
    description: 'Proficient in Python with extensive experience in web development, data analysis, and scripting.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    title: 'MySQL',
    rating: 80,
    description: 'Experience in managing MySQL databases, including optimization and complex queries.',
    imageUrl: 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png',
  },
  {
    title: 'Django',
    rating: 85,
    description: 'Skilled in Django, capable of building robust and scalable web applications.',
    imageUrl: 'https://www.opengis.ch/wp-content/uploads/2020/04/django-python-logo.png',
  },
  {
    title: 'HTML',
    rating: 95,
    description: 'Strong knowledge of HTML for creating well-structured and accessible web pages.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  },
  {
    title: 'React.js',
    rating: 75,
    description: 'Proficient in React.js for building dynamic and responsive user interfaces.',
    imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
  },
  {
    title: 'CSS',
    rating: 85,
    description: 'Experience in using CSS for creating visually appealing and responsive designs.',
    imageUrl: 'https://1000marcas.net/wp-content/uploads/2021/02/CSS-Logo.png',
  },
  {
    title: 'Bootstrap',
    rating: 80,
    description: 'Familiar with Bootstrap for fast and responsive web design.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
  },
  {
    title: 'JavaScript',
    rating: 90,
    description: 'Strong skills in JavaScript, capable of creating dynamic and interactive web experiences.',
    imageUrl: 'https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png',
  },
  {
    title: 'REST API',
    rating: 70,
    description: 'Experience in designing and consuming RESTful APIs for seamless communication between frontend and backend.',
    imageUrl: 'https://tomaztsql.files.wordpress.com/2021/08/restapi2.png',
  },
];

const Skill = () => {
  return (
    <Container fluid className="skills-background ">
      <h1 className="text-center mb-4 text-light">Skills</h1>
      <Row>
        {skills.map((skill, index) => (
          <Col key={index} md={4} className="mb-2">
            <Card className="skill-card">
              <Card.Img variant="top" src={skill.imageUrl} className="skill-image" />
              <Card.Body>
                <Card.Title className="skill-title">{skill.title}</Card.Title>
                <ProgressBar now={skill.rating} label={`${skill.rating}%`} className="mb-3" />
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id={`tooltip-${index}`}>{skill.description}</Tooltip>}
                >
                  <span className="highlighted-text">Hover to learn more</span>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skill;
