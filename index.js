// backend/index.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'restaurant'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

app.post('/reservations', (req, res) => {
  const { customerName, phoneNumber, guests, reservationTime } = req.body;
  const sql = 'INSERT INTO reservations (customerName, phoneNumber, guests, reservationTime) VALUES (?, ?, ?, ?)';
  db.query(sql, [customerName, phoneNumber, guests, reservationTime], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Reservation added!' });
  });
});

// View all reservations
app.get('/reservations', (req, res) => {
  db.query('SELECT * FROM reservations', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Delete a reservation
app.delete('/reservations/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM reservations WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Reservation deleted!' });
  });
});

// Update/Edit a reservation
app.put('/reservations/:id', (req, res) => {
  const id = req.params.id;
  const { customerName, phoneNumber, guests, reservationTime } = req.body;
  const sql = 'UPDATE reservations SET customerName = ?, phoneNumber = ?, guests = ?, reservationTime = ? WHERE id = ?';
  db.query(sql, [customerName, phoneNumber, guests, reservationTime, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Reservation updated!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
