const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.get('/public/weather-app.js', (req, res) => {
    res.sendFile(__dirname + '/public/weather-app.js', { 'Content-Type': 'application/javascript' });
  });
// serve css file
app.get('/public/weatherapp.css', (req, res) => {
    res.sendFile(__dirname + '/public/weatherapp.css', { 'Content-Type': 'text/css' });
  });
// Serve HTML file when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'weather-app.html'));
});
mongoose.connect('mongodb://127.0.0.1:27017/MLH', { useNewUrlParser: true });

// Define your Mongoose model and schema (replace with your actual model and schema)
app.get('/getCoordinates', async (req, res) => {
  const cityName = req.query.city;

  try {
      // Retrieve data from MongoDB without explicitly defining a schema
      const cityData = await mongoose.connection.db.collection('cities').findOne({city: cityName});

      if (!cityData) {
          return res.status(404).json({ error: 'City not found' });
      }

      res.json({ latitude: cityData.latitude, longitude: cityData.longitude, city: cityData.city });
  } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
