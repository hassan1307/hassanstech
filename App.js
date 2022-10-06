import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import FrontPage from './FrontPage';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects'
import Contact from './Contact';
import Footer from './Footer';
import CV from './CV';
import Eyes from './Eyes';
function App() {
  return (
    <div className="App">
      <CV/>
      <Nav/>
      <FrontPage/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Eyes />
    </div>
  );
}

export default App;
