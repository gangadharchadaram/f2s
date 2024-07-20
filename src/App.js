
import './App.css';
import About from './components/About';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testnomials';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partners from './components/Partners';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Reviews />
      <Contact />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
