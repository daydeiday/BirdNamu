document.addEventListener('DOMContentLoaded', function() {
  fetch('../json/species.json') // JSON 파일 경로! (조심)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const speciesSelect = document.getElementById('species');
      
      speciesSelect.innerHTML = '';

      data.forEach(species => {
        const option = document.createElement('option');
        option.value = species.value;
        option.textContent = species.text;
        speciesSelect.appendChild(option);
      });
    })
    .catch(error => console.error('Error loading species data:', error));
});
