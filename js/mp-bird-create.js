$(document).ready(function() {
  const speciesList = ['사랑앵무', '왕관앵무', '모란앵무','코카투']; 
  let speciesOptions = '';
  speciesList.forEach(function(species) {
      speciesOptions += `<option value="${species}">${species}</option>`;
  });
  $('#species').html(speciesOptions);

  const traitsList = ['활발함', '차분함', '귀여움','정신없음']; 
  let traitsOptions = '';
  traitsList.forEach(function(trait) {
      traitsOptions += `<option value="${trait}">${trait}</option>`;
  });
  $('#traits').html(traitsOptions);

  // 반려조 개월수 계산하기
  $('#birthdate').on('change', function() {
      const birthDate = new Date(this.value);
      const today = new Date();
      const ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());
      $('#ageInMonths').text(`(${ageInMonths}개월)`);
  });

  // Display selected traits
  $('#traits').on('change', function() {
      const selectedOptions = Array.from(this.selectedOptions).map(option => option.value);
      $('#selected-traits').text(selectedOptions.join(', '));
  });
});

function handleSubmit() {
  const form = document.getElementById('birdForm');
  const formData = new FormData(form);

  const name = formData.get('username');
  const birthdate = formData.get('birthdate');
  const gender = formData.get('gender');
  const species = formData.get('species');
  const traits = formData.getAll('traits');

  if (traits.length < 1 || traits.length > 3) {
      alert('성격은 1개 이상 3개 이하로 선택해주세요.');
      return;
  }

  window.location.href = './mp-first.html'; 
}
