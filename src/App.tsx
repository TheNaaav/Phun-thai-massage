import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import Header from './components/Header';
import { Services } from './pages/Services';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import { Analytics } from "@vercel/analytics/react"

const App: React.FC = () => {
  return (
    
    <Router>
      <Analytics />
      <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
