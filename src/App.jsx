import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEditSurvey from './pages/AddEditSurvey';

import UserDashboard from './pages/UserDashboard';
import UserSurveyList from './components/UserSurveyList';
import Footer from './components/Footer';
import Header from './components/Header';
import Tanitim from './components/Tanitim';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">        
          <Routes>
            <Route path="/add-survey" element={<AddEditSurvey />} />
            <Route path="/edit-survey/:id" element={<AddEditSurvey />} />
            <Route path="/" element={<UserDashboard />} />
            <Route path="/anketler" element={<UserSurveyList />} />
            <Route path="/tanitim" element={<Tanitim />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
