async function getWeather() {
    try {
        const city = document.getElementById("cityInput").value;
        const apiKey = "d69a413f9d18c52047bc2447b4fbc8da";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if (response.ok) {
            const data = await response.json();
            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
        } else {
            const errorData = await response.json();
            document.getElementById("weatherResult").innerHTML = `Error: ${errorData.message}`;
        }
    } catch (error) {
        console.error("Fetch error:", error);
        document.getElementById("weatherResult").innerHTML = "An error occurred. Check console.";
    }
}

