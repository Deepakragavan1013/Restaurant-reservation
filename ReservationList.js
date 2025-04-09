import React, { useState } from 'react';
import axios from 'axios';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [showReservations, setShowReservations] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    customerName: '',
    phoneNumber: '',
    guests: '',
    reservationTime: '',
  });

  const fetchReservations = async () => {
    try {
      const res = await axios.get('http://localhost:5000/reservations');
      setReservations(res.data);
      setShowReservations(true);
    } catch (error) {
      alert("Failed to load reservations");
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/reservations/${id}`);
    fetchReservations();
  };

  const handleEditClick = (res) => {
    setEditId(res.id);
    setEditData({
      customerName: res.customerName,
      phoneNumber: res.phoneNumber,
      guests: res.guests,
      reservationTime: res.reservationTime.slice(0, 16),
    });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:5000/reservations/${editId}`, editData);
    setEditId(null);
    fetchReservations();
  };

  return (
    <div>
      <button onClick={fetchReservations}>View Reservations</button>

      {showReservations && (
        <div>
          <h2>Reservations List</h2>
          {reservations.map((res) => (
            <div key={res.id} style={{ marginBottom: '10px', borderBottom: '1px solid gray', paddingBottom: '10px' }}>
              {editId === res.id ? (
                <div>
                  <input name="customerName" value={editData.customerName} onChange={handleEditChange} />
                  <input name="phoneNumber" value={editData.phoneNumber} onChange={handleEditChange} />
                  <input name="guests" type="number" value={editData.guests} onChange={handleEditChange} />
                  <input name="reservationTime" type="datetime-local" value={editData.reservationTime} onChange={handleEditChange} />
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </div>
              ) : (
                <div>
                  <strong>{res.customerName}</strong> - {res.phoneNumber} - {res.guests} guests -{' '}
                  {new Date(res.reservationTime).toLocaleString()}
                  <div style={{ marginTop: '5px' }}>
                    <button onClick={() => handleEditClick(res)}>Edit</button>{' '}
                    <button onClick={() => handleDelete(res.id)}>Delete</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservationList;
