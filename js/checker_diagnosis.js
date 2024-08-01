document.addEventListener('DOMContentLoaded', function() {
  const diagnosisContainer = document.getElementById('diagnosis-container');
  
  // 예시! 이거 정리해서 파일로 만들고, json 이랑 연결하기 (개수 제한도 할지)
  const diagnosisData = [
    { name: 'Diagnosis 1', percentage: '70%' },
    { name: 'Diagnosis 2', percentage: '60%' },
    { name: 'Diagnosis 3', percentage: '80%' },
    { name: 'Diagnosis 4', percentage: '65%' },
    { name: 'Diagnosis 5', percentage: '55%' },
    { name: 'Diagnosis 6', percentage: '75%' }
  ];

  // diagnosis box 만드는 부분
  diagnosisData.forEach(diagnosis => {
    const diagnosisBox = document.createElement('div');
    diagnosisBox.className = 'diagnosis-box';
    diagnosisBox.innerHTML = `
      ${diagnosis.name}
      <div class="percentage">${diagnosis.percentage}</div>
    `;
    diagnosisContainer.appendChild(diagnosisBox);
  });
});
