import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './HomePage';
import TrackingPage from './TrackingPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/logistic/" exact element={<HomePage/>} />
          <Route path="/tracking" element={<TrackingPage/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
