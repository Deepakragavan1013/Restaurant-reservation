const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all reservations
router.get('/', (req, res) => {
  db.query('SELECT * FROM Reservations', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// POST new reservation
router.post('/', (req, res) => {
  const { customerName, phoneNumber, guests, reservationTime } = req.body;
  const sql = 'INSERT INTO Reservations (customerName, phoneNumber, guests, reservationTime) VALUES (?, ?, ?, ?)';
  db.query(sql, [customerName, phoneNumber, guests, reservationTime], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Reservation added successfully!' });
  });
});

// DELETE reservation by ID
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM Reservations WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Reservation deleted successfully!' });
  });
});

module.exports = router;
