# Weather App: Real-time information at your fingertips

This README details the **Weather App**, providing real-time weather insights based on your location or chosen city. It combines a sleek **client-side application** (JavaScript, HTML, CSS) with a robust **server-side component** (Node.js, Express, MongoDB).

## Features:

* **Real-time Weather:** Get instant access to current conditions, including hourly and daily forecasts, with pinpoint accuracy.
  
   ![image](https://github.com/Viswesh934/Weather-App/assets/98519767/0f35948f-7639-4379-bdfd-647b8f3f5a76)

* **City Search:** Explore the weather of any city worldwide. Simply enter the name and delve into its details.
  
  ![image](https://github.com/Viswesh934/Weather-App/assets/98519767/82baf138-f3f1-424d-ba4a-f805f77f2c79)

  
* **MongoDB Integration:** Leverage the power of MongoDB to efficiently store and retrieve city coordinates, ensuring smooth performance.
  
   ![image](https://github.com/Viswesh934/Weather-App/assets/98519767/aacb7eee-65c1-4e24-bcc8-0fc1cdc71df6)


## Client-Side Application:

**Get Started:**

1. Clone the repository: `git clone https://github.com/your-username/weather-app.git`
2. Open `index.html` in a geolocation-enabled browser.
3. Allow location access for accurate updates.
4. Search for a city in the bar and unveil its weather story.

**Dependencies:**

* Open Meteo API: Fueling the app with real-time weather data.

## Server-Side Component:

**Set Up:**

1. Install dependencies: `npm install`
2. Start the server: `node server.js`
3. Access the app: Open `http://localhost:3000` in your browser.

**MongoDB Configuration:**

* **Connection URL:** Currently set to `mongodb://127.0.0.1:27017`, modify in `server.js` as needed.
* **Database Name:** Defaulting to `MLH`, update in `mongoose.connect` if desired.

**API Endpoint:**

* **City Coordinates API Endpoint:** `/getCoordinates` accepts a `city` query parameter and returns latitude, longitude, and city name from the database.

```bash
GET http://localhost:3000/getCoordinates?city=Berlin
```
.
**Dependencies:**

* Express: Streamlining web application development for Node.js.
* Mongoose: Bridging the gap between Node.js and MongoDB effortlessly.

## Contributing:

We welcome contributions to enhance the Weather App! Feel free to open issues or submit pull requests for bug fixes or improvements.

## License:

This Weather App is released under no license. Use, modify, and distribute it as you please!


## Additional Notes:
* This script imports city data from a worldcities.csv file into a local MongoDB database (defaults to localhost:27017/MLH). It defines a City schema for data structure, parses the CSV efficiently, inserts each row as a document, and handles errors. Run node import_cities.js after installing dependencies. Customize connection string and data extraction if needed. Enjoy effortless city data import!
* Feel free to add screenshots or gifs showcasing the app's features.
* Consider further customizing the README with specific instructions for your app, like environment setup or configuration details.





