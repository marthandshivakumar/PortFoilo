import './App.css';
import Main from './Main';
import NavigationBar from './Nav';
import Projects from './Projects';
import Skill from './Skills';
import About from './about';
import ContactForm from './contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavigationBar />
          <div style={{ paddingTop: '85px' }}> 
            <Routes>
              <Route path="/projects" element={<Projects />} />
              <Route path="/" element={<Main />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactForm />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
