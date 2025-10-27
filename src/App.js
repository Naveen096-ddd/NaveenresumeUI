import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Homepage/Home';
import About from './components/pages/About/About';
import ResumeProvider from './components/pages/contex/Contex';
import Contact from './components/pages/Contact/Contact';
import Projects from './components/pages/Projects/Project';
import Skill from './components/pages/Skills/Skill';
function App() {
  return (
    <div className="App">
      <Router>
        <ResumeProvider>
          <Routes>
            <Route path="/" element={<Nav/>} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path='/project' element={<Projects/>}/>
            <Route path='/skill' element={<Skill/>}/>
          </Routes>
        </ResumeProvider>
      </Router>
    </div>
  );
}

export default App;
