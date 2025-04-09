Restaurant Reservation App

A full-stack web application for managing restaurant reservations. Built with **React** for the frontend, **Node.js + Express** for the backend, and **MySQL** for data storage.

## Features

- Make a reservation by filling a form
- View all reservations on a separate page
- Delete or edit existing reservations
- User-friendly and responsive UI

## Tech Stack

- **Frontend:** React, Axios
- **Backend:** Node.js, Express
- **Database:** MySQL

## Screenshots

| Reservation Form | Reservation List |
|------------------|------------------|
| ![Form](screenshots/form.png) | ![List](screenshots/list.png) |

## Project Structure

restaurant-reservation-app/ ├── backend/ │   ├── index.js │   └── db.js ├── frontend/ │   ├── public/ │   ├── src/ │   │   ├── components/ │   │   │   └── ReservationForm.js │   │   ├── pages/ │   │   │   ├── ReservationFormPage.js │   │   │   └── ReservationListPage.js │   │   └── App.js │   └── package.json

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/restaurant-reservation-app.git
cd restaurant-reservation-app

2. Set up the Backend

cd backend
npm install

Update your MySQL credentials in db.js

Create the restaurant database and reservations table:


CREATE DATABASE restaurant;

USE restaurant;

CREATE TABLE reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customerName VARCHAR(255),
  phoneNumber VARCHAR(20),
  guests INT,
  reservationTime DATETIME,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

Start the server:


node index.js

3. Set up the Frontend

cd ../frontend
npm install
npm start

The app will run at http://localhost:3000


Usage

Navigate to /form to create a new reservation

Navigate to /reservations to view, delete, or edit reservations


Contributing

Pull requests are welcome. For major changes, please open an issue first.
