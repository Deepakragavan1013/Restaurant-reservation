import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [form, setForm] = useState({
    customerName: '',
    phoneNumber: '',
    guests: '',
    reservationTime: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/reservations', form);
      alert('Reservation added!');
      setForm({ customerName: '', phoneNumber: '', guests: '', reservationTime: '' });
    } catch (err) {
      alert('Error creating reservation');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial',
      padding: '40px',
      backgroundColor: '#f0f4f8',
      minHeight: '100vh'
    }}>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '25px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h2 style={{ textAlign: 'center' }}>Fill the Customer Details</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input name="customerName" placeholder="Customer Name" value={form.customerName} onChange={handleChange} required />
          <input name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} required />
          <input name="guests" type="number" placeholder="Guests" value={form.guests} onChange={handleChange} required />
          <input name="reservationTime" type="datetime-local" value={form.reservationTime} onChange={handleChange} required />
          <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
