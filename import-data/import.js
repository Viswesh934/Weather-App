const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/MLH', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the schema
const citySchema = new mongoose.Schema({
  city: String,
  longitude: Number,
  latitude: Number,
});

// Create the model
const City = mongoose.model('City', citySchema);

// Read CSV file and insert data into MongoDB
fs.createReadStream('worldcities.csv')
  .pipe(csv())
  .on('data', async (row) => {
    // Assuming your CSV headers are 'city', 'longitude', 'latitude'
    const cityData = {
      city: row.city,
      longitude: parseFloat(row.lng),
      latitude: parseFloat(row.lat),
    };

    try {
      // Insert data into MongoDB using Mongoose
      const result = await City.create(cityData);
      console.log(`Inserted: ${result ? 1 : 0} document(s)`);
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  })
await streamEnd;
mongoose.connection.close();
console.log('Import completed.');