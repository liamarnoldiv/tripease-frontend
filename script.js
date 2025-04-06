const form = document.getElementById('tripForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  resultDiv.textContent = "Planning your trip... please wait!";

  const response = await fetch('https://tripease-backend.onrender.com/generate-itinerary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      destination: document.getElementById('destination').value,
      days: document.getElementById('days').value,
      budget: document.getElementById('budget').value,
      preferences: document.getElementById('preferences').value
    })
  });

  const data = await response.json();
  resultDiv.textContent = data.itinerary || "Something went wrong.";
});
