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
  // 생년월일 선택 시 개월 수 계산
  $('#birthdate').on('change', function() {
      const birthDate = new Date(this.value);
      const today = new Date();
      const ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());
      $('#ageInMonths').text(`(${ageInMonths}개월)`);
  });

  // 성격 선택 처리
  $('#traits').on('change', function() {
      const selectedOptions = Array.from(this.selectedOptions).map(option => option.text);
      const selectedTraitsHtml = selectedOptions.map(trait => `<span class="selected-trait">${trait}</span>`).join('');
      $('#selected-traits').html(selectedTraitsHtml);
  });

  // 반려조 선택 시 정보 표시
  $('#selectBird').on('change', function() {
      const selectedBird = this.value;
      $('#birdInfo').show();
      if (selectedBird === '송송이') {
          $('#username').val('송송이');
          $('#birthdate').val('2020-01-01');
          $('#gender').val('female');
          $('#species').val('budgerigar');
          $('#traits').val(['curious', 'active']);
          $('#selected-traits').html('<span class="selected-trait">호기심많은</span><span class="selected-trait">활발한</span>');
      }
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

  // 생년월일로부터 개월 수 계산
  const birthDateObj = new Date(birthdate);
  const today = new Date();
  const ageInMonths = (today.getFullYear() - birthDateObj.getFullYear()) * 12 + (today.getMonth() - birthDateObj.getMonth());

  // 성격 선택 제한 확인
  if (traits.length < 1 || traits.length > 3) {
      alert('성격은 1개 이상 3개 이하로 선택해주세요.');
      return;
  }

  const body = document.querySelector('body');
  body.innerHTML =
      '<main class="submitted"><section><div id="logo">새와나(id="logo")</div><div id="submitted"><h1>반갑습니다 :D</h1><h2>정보 수정이 완료되었습니다.</h2><div><a href="./login.html">로그인하러 가기</a></div></div></section></main>';
}

function handleDelete() {
  if (confirm('반려조를 정말 삭제하겠습니까?')) {
      alert('반려조가 삭제되었습니다.');
      window.location.href = './mp-first.html'; 
    }
}