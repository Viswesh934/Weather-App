document.addEventListener('DOMContentLoaded', () => {
    // Get user's location
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Modify the API URL with the user's location and specified parameters
            const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_180m&daily=temperature_2m_max,temperature_2m_min`;

            // Fetch weather data
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Display current weather
                    const currentTime = new Date();
                    const currentHour = currentTime.getHours();

                    // Find the index of the nearest hourly forecast
                    const nearestHourIndex = data.hourly.time.findIndex(hour => {
                        const hourTime = new Date(hour);
                        return hourTime.getHours() >= currentHour;
                    });

                    if (nearestHourIndex !== -1) {
                        // Display nearest hourly forecast in HTML
                        const nearestHourlyTime = new Date(data.hourly.time[nearestHourIndex]);
                        document.getElementById('weather__realfeel').innerText = data.hourly.temperature_2m[nearestHourIndex];
                        document.getElementById('weather__humidity').innerText = data.hourly.relative_humidity_2m[nearestHourIndex];
                        document.getElementById('weather__wind').innerText = data.hourly.wind_speed_180m[nearestHourIndex];
                        document.getElementById('weather__pressure').innerText = data.hourly.surface_pressure[nearestHourIndex];
                    } else {
                        // Display message if no hourly forecast is available
                        document.getElementById('weather__realfeel').innerText = 'No hourly forecast available for the current time.';
                    }

                    // Display daily forecast in HTML
                    const maxTemperature = data.daily.temperature_2m_max[0];
                    const minTemperature = data.daily.temperature_2m_min[0];

                    document.getElementById('max-temp').innerText = `Max: ${maxTemperature}°C`;
                    document.getElementById('min-temp').innerText = `Min: ${minTemperature}°C`;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        }, error => {
            console.error('Error getting user location:', error);
        });
    } else {
        console.error('Geolocation is not supported by your browser');
    }
    document.getElementById('search').addEventListener('submit', async function (event) {
        event.preventDefault();
    
        const cityInput = document.getElementById('city');
        const cityName = cityInput.value;
    
        // Example: Replace with your actual API endpoint
        const apiUrl = `http://localhost:3000/getCoordinates?city=${encodeURIComponent(cityName)}`;
    
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
    
            // Update HTML with the retrieved latitude and longitude
            updateWeather(data.latitude, data.longitude, data.city);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
    
    function updateWeather(latitude, longitude,city) {
        // Example: Update HTML content with latitude and longitude
        const latitude1= latitude;
        const longitude1= longitude;
        
        // Add similar updates for other elements as needed
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude1}&longitude=${longitude1}&hourly=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_180m&daily=temperature_2m_max,temperature_2m_min`;

        // Fetch weather data
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display current weather
                const currentTime = new Date();
                const currentHour = currentTime.getHours();

                // Find the index of the nearest hourly forecast
                const nearestHourIndex = data.hourly.time.findIndex(hour => {
                    const hourTime = new Date(hour);
                    return hourTime.getHours() >= currentHour;
                });

                if (nearestHourIndex !== -1) {
                    // Display nearest hourly forecast in HTML
                    const nearestHourlyTime = new Date(data.hourly.time[nearestHourIndex]);
                    document.getElementById('weather__realfeel').innerText = data.hourly.temperature_2m[nearestHourIndex];
                    document.getElementById('weather__humidity').innerText = data.hourly.relative_humidity_2m[nearestHourIndex];
                    document.getElementById('weather__wind').innerText = data.hourly.wind_speed_180m[nearestHourIndex];
                    document.getElementById('weather__pressure').innerText = data.hourly.surface_pressure[nearestHourIndex];
                    document.getElementById('weather__city').innerText= city;
                } else {
                    // Display message if no hourly forecast is available
                    document.getElementById('weather__realfeel').innerText = 'No hourly forecast available for the current time.';
                }
              
                // Display daily forecast in HTML
                const maxTemperature = data.daily.temperature_2m_max[0];
                const minTemperature = data.daily.temperature_2m_min[0];

                document.getElementById('max-temp').innerText = `Max: ${maxTemperature}°C`;
                document.getElementById('min-temp').innerText = `Min: ${minTemperature}°C`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }
    

});
