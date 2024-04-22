import './App.css';
import Main from './Main';
import NavigationBar from './Nav';
import Projects from './Projects.js';
import Skill from './Skills.js';
import Contact from './Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
     <Router>
      <div>
      <NavigationBar />
        <Routes> {/* Change here: Use Routes instead of Switch */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Main />} />
          <Route path="/Skill" element={<Skill />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
