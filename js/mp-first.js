function showSection(sectionId) {
  document.getElementById('my-info').style.display = 'none';
  document.getElementById('bird-info').style.display = 'none';
  
  document.getElementById('my-info-tab').classList.remove('active');
  document.getElementById('bird-info-tab').classList.remove('active');

  document.getElementById(sectionId).style.display = 'block';
  document.getElementById(sectionId + '-tab').classList.add('active');
}

// Example bird data to be loaded dynamically
const birds = [
  { name: "사랑", gender: "암컷", birthday: "0000.00.00", age: "12개월", species: "회색앵무", personality: "#까칠함 #귀여움" },
  { name: "희망", gender: "수컷", birthday: "0000.00.00", age: "8개월", species: "왕관앵무", personality: "#활발함 #장난기많음" },
  { name: "랄이", gender: "모름", birthday: "0000.00.00", age: "15개월", species: "코카투", personality: "#온순함 #조용함" }
];

// Function to render bird information
function renderBirdInfo() {
  const birdList = document.getElementById('bird-list');
  birdList.innerHTML = '';

  birds.forEach(bird => {
      const birdInfoDiv = document.createElement('div');
      birdInfoDiv.classList.add('bird-info');
      birdInfoDiv.innerHTML = `
          <div class="bird-pic">
              <img src="https://via.placeholder.com/100" alt="Bird Picture">
          </div>
          <div class="bird-details">
              <p>이름: ${bird.name}</p>
              <p>성별: ${bird.gender}</p>
              <p>생일: ${bird.birthday} (나이: ${bird.age})</p>
              <p>종: ${bird.species}</p>
              <p>성격: ${bird.personality}</p>
          </div>
          <hr>
      `;
      birdList.appendChild(birdInfoDiv);
  });
}

// Load the bird information when the page loads
document.addEventListener('DOMContentLoaded', renderBirdInfo);
