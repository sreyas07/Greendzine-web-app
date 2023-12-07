import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

import Layout from './Layout';
import EmployeeCard from './EmployeeCard';
import EmployeeProductivity from './EmployeeProductivity';
import './MainComponent.css';

const progressData = [
  { day: 'Sunday', progress: 80 },
  { day: 'Monday', progress: 60 },
  { day: 'Tuesday', progress: 90 },
  { day: 'Wednesday', progress: 75 },
  { day: 'Thursday', progress: 50 },
  { day: 'Friday', progress: 85 },
  { day: 'Saturday', progress: 70 },
];

const MainComponent = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Layout><EmployeeProductivity progressData={progressData} /></Layout>}
          />
          <Route
            path="/employee-card"
            element={<Layout><EmployeeCard /></Layout>}
          />
        </Routes>

        <Nav className="navbar">
          <Nav.Item>
            <Link
              to="/"
              onClick={() => setActiveNav('#')}
              className={`nav-link ${activeNav === '#' ? 'active' : ''}`}
              style={{ fontSize: '1.7rem', color: '#36A54680'}}
            >
              <AiOutlineHome />
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/employee-card"
              onClick={() => setActiveNav('#employee-card')}
              className={`nav-link ${activeNav === '#employee-card' ? 'active' : ''}`}
              style={{ fontSize: '1.7rem', color: '#36A54680' }}
            >
              <AiOutlineUser />
            </Link>
          </Nav.Item>
        </Nav>
      </Router>
    </div>
  );
};

export default MainComponent;



