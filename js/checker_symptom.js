function showAilments(part) {
  const ailments = {
    head: ['Swelling', 'Discharge', 'Redness'],
    body: ['Feather loss', 'Lumps', 'Skin irritation'],
    wing: ['Feather issues', 'Cuts', 'Broken bones'],
    leg: ['Swelling', 'Rashes', 'Redness']
  };

  const ailmentsContainer = document.getElementById('ailments');
  ailmentsContainer.innerHTML = '';

  if (ailments[part]) {
    const ailmentList = document.createElement('ul');
    ailments[part].forEach(ailment => {
      const listItem = document.createElement('li');
      listItem.textContent = ailment;
      ailmentList.appendChild(listItem);
    });
    ailmentsContainer.appendChild(ailmentList);
  }
}
