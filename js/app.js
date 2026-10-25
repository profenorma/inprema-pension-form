function togglePrestamoNumeral() {
  const checkbox = document.getElementById('tienePrestamo');
  const numeral3 = document.getElementById('numeral3');
  if (checkbox.checked) {
    numeral3.style.display = 'list-item';
  } else {
    numeral3.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input[type="text"], select');
  
  inputs.forEach(input => {
    const savedValue = localStorage.getItem('inprema_' + input.id);
    if (savedValue) input.value = savedValue;

    input.addEventListener('input', () => {
      localStorage.setItem('inprema_' + input.id, input.value);
    });
  });
});
