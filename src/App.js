import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Scratch from './components/ScratchAway/Scratch';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <About />
      <Scratch />
      <Skills />
      <Projects />
      <Contact />
      </div>
      );
    };

export default App;
