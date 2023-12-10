// renderer.js

// Function to fetch data from the API
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/weather'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
  
      // Update HTML elements with API data
      document.getElementById('location').innerText = `Weather for ${data.location}`;
      document.getElementById('rainchance').innerText = data.rainchance;
      document.getElementById('temp').innerText = data.temp;
      document.getElementById('city').innerText = data.city;
      document.getElementById('time').innerText = data.time;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Call the fetchData function when the page loads
  window.onload = fetchData;
  