const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy vehicle data
const vehicleData = [
  { latitude: 37.7749, longitude: -122.4194, timestamp: "2024-08-03T10:00:00Z" },
  { latitude: 37.7750, longitude: -122.4195, timestamp: "2024-08-03T10:00:05Z" }
];

// API route
app.get('/api/vehicle-data', (req, res) => {
  res.json(vehicleData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
