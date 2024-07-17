import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEditSurvey from './pages/AddEditSurvey';
import UserDashboard from './pages/UserDashboard';
import UserSurveyList from './components/UserSurveyList';
import Tanitim from './components/Tanitim';
import Layout from './pages/Layout'; // Layout bileşenini içe aktarın


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/add-survey" element={<AddEditSurvey />} />
          <Route path="/edit-survey/:id" element={<AddEditSurvey />} />
          <Route path="/" element={<UserDashboard />} />
          <Route path="/anketler" element={<UserSurveyList />} />
          <Route path="/tanitim" element={<Tanitim />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
