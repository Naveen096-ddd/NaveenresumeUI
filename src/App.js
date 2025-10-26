import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Homepage/Home';
import About from './components/pages/About/About';
import ResumeProvider from './components/pages/contex/Contex';
function App() {
  return (
    <div className="App">
      <Router>
        <ResumeProvider>
        <Nav />
        <Home/>
        <About/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ResumeProvider>
      </Router>
    </div>
  );
}

export default App;
