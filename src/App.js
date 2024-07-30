import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import WhoWeAre from './components/Whoweare';
import Work from './components/Work';
import Service from './components/Service';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<WhoWeAre />} />
        <Route path="/services" element={<Service />} />
        <Route path="/projects" element={<Work />} />
        <Route path='/contact' element={<ContactForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
