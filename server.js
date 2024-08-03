// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const vehicleData = [
  { latitude: 37.7749, longitude: -122.4194, timestamp: "2024-08-03T10:00:00Z" },
  { latitude: 37.7750, longitude: -122.4195, timestamp: "2024-08-03T10:00:05Z" }
];

app.get('/api/vehicle-data', (req, res) => {
  res.json(vehicleData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
