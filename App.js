import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReservationFormPage from './pages/ReservationFormPage';
import ReservationListPage from './pages/ReservationListPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f5f5f5' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Make a Reservation</Link>
        <Link to="/reservations">View Reservations</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ReservationFormPage />} />
        <Route path="/reservations" element={<ReservationListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
