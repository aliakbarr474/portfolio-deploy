import About from './About.js';
import './App.css';
import Contact from './Contact.js';
import Hero from './Hero';
import Navbar from './Navbar.js';
import Testimonials from './Testimonials.js';
import Work from './Work.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
