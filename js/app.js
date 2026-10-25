document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input[type="text"], select');
  
  inputs.forEach(input => {
    const savedValue = localStorage.getItem('inprema_p1_' + input.id);
    if (savedValue) input.value = savedValue;

    input.addEventListener('input', () => {
      localStorage.setItem('inprema_p1_' + input.id, input.value);
    });
  });
});
