$(document).ready(function() {
  // 종 정보 로드
  $.getJSON('../json/species.json', function(data) {
    let speciesOptions = '';
    data.forEach(function(species) {
      speciesOptions += `<option value="${species}">${species}</option>`;
    });
    $('#species').html(speciesOptions);
  });

  // 성격 정보 로드
  $.getJSON('../json/traits.json', function(data) {
    let traitsOptions = '';
    data.forEach(function(trait) {
      traitsOptions += `<option value="${trait}">${trait}</option>`;
    });
    $('#traits').html(traitsOptions);
  });

  // 생년월일 선택 시 개월 수 계산
  $('#birthdate').on('change', function() {
    const birthDate = new Date(this.value);
    const today = new Date();
    const ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());
    $('#ageInMonths').text(`(${ageInMonths}개월)`);
  });

  // 성격 선택 처리
  $('#traits').on('change', function() {
    const selectedOptions = Array.from(this.selectedOptions).map(option => option.value);
    $('#selected-traits').html(selectedOptions.join(', '));
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
    '<main class="submitted"><section><div id="logo">새와나(id="logo")</div><div id="submitted"><h1>반갑습니다 :D</h1><h2>회원가입이 완료되었습니다.</h2><div><a href="./login.html">로그인하러 가기</a></div></div></section></main>';
}
