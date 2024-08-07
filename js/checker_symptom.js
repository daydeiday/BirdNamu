document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.grid-item');
  const symptomsList = document.getElementById('symptoms-list');
  const selectedPartsContainer = document.getElementById('selected-parts');
  const selectedDataContainer = document.getElementById('selected-data');
  const resetButton = document.getElementById('reset-button');

  const selectedParts = {};
  const koreanNames = {
    head: '머리',
    eyes: '눈',
    beak: '부리',
    chest: '가슴',
    wings: '날개',
    abdomen: '배',
    legs: '다리',
    feet: '발',
    skin: '피부'
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const part = button.getAttribute('data-part');
      const symptoms = symptomsData[part];
      symptomsList.innerHTML = '';
      symptoms.forEach(symptom => {
        const symptomItem = document.createElement('div');
        symptomItem.className = 'symptom-item';
        symptomItem.textContent = symptom;
        symptomItem.addEventListener('click', () => {
          if (!selectedParts[part]) {
            selectedParts[part] = [];
          }
          if (!selectedParts[part].includes(symptom)) {
            selectedParts[part].push(symptom);
          }
          renderSelectedParts();
        });
        symptomsList.appendChild(symptomItem);
      });
    });
  });

  resetButton.addEventListener('click', () => {
    for (let part in selectedParts) {
      delete selectedParts[part];
    }
    renderSelectedParts(); // Clear selected parts display
  });

  function renderSelectedParts() {
    selectedPartsContainer.innerHTML = '';
    if (Object.keys(selectedParts).length > 0) {
      selectedDataContainer.style.display = 'block';
      for (const part in selectedParts) {
        const partDiv = document.createElement('div');
        partDiv.className = 'selected-part';
        const partTitle = document.createElement('span');
        partTitle.textContent = `${koreanNames[part]}: `;
        partDiv.appendChild(partTitle);
        partDiv.appendChild(document.createTextNode(selectedParts[part].join(', ')));
        selectedPartsContainer.appendChild(partDiv);
      }
    } else {
      selectedDataContainer.style.display = 'none';
    }
  }
});


const symptomsData = {
  head: ['부리 변형', '부리 색 변화', '부리 균열', '부리 과도한 성장', '부리 출혈'],
  eyes: ['눈 분비물', '눈 충혈', '눈 부종', '시력 상실', '눈 주변 깃털 손실'],
  beak: ['부리 변형', '부리 색 변화', '부리 균열', '부리 과도한 성장', '부리 출혈'],
  chest: ['호흡 곤란', '흉부 부종', '깃털 손실'],
  wings: ['날개 처짐', '날개 깃털 손실', '날개 부상', '비행 불능'],
  abdomen: ['복부 팽창', '체중 감소', '비정상적인 덩어리'],
  legs: ['다리 절뚝거림', '발 부종', '발톱 변형', '발목 부상'],
  feet: ['다리 절뚝거림', '발 부종', '발톱 변형', '발목 부상'],
  skin: ['깃털 가려움', '깃털 손실', '피부 발진', '피부 궤양', '비정상'] }
