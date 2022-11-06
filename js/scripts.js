window.addEventListener('load', function () {
  const form = document.querySelector('form');
  const resetBtn = document.getElementById('resetBtn');

  function handleReset() {
    document.getElementById('nameInput').value = '';
    document.getElementById('toppingInput').value = '';
    document.getElementById('animalInput').value = '';
    document.getElementById('drinkInput').value = '';
    document.getElementById('foxInput').value = '';
    document.getElementById('dogInput').value = '';
    document.getElementById('results').innerHTML = null;
  }

  resetBtn.addEventListener('click', handleReset)

  function handleFormSubmit(e) {
    e.preventDefault();
    let suggestion;
    const nameInput = document.getElementById('nameInput').value;
    const toppingInput = document.getElementById('toppingInput').value;
    const animalInput = document.getElementById('animalInput').value;
    const drinkInput = document.getElementById('drinkInput').value;
    const foxInput = document.getElementById('foxInput').value;
    const dogInput = document.getElementById('dogInput').value;
    if (toppingInput === 'yes') {
      suggestion = 'Python';
    } else if (toppingInput === 'absolutely') {
      suggestion = 'JavaScript';
    } else if (toppingInput !== 'yes' && toppingInput !== 'absolutely') {
      suggestion = 'HTML';
    }
    const outputString = nameInput + ", we have determined that you should pick: " + suggestion + ".";
    const paragraph = document.createElement('p');
    paragraph.append(outputString);
    document.getElementById('results').append(paragraph);
  }

  form.addEventListener('submit', handleFormSubmit)
})