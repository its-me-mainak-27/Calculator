const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const value = e.target.value;

    if (value === 'clear') {
      display.textContent = '0';
    } else if (value === 'backspace') {
      display.textContent = display.textContent.slice(0, -1) || '0';
    } else if (value === '=') {
      try {
        display.textContent = eval(display.textContent);
      } catch (e) {
        display.textContent = 'Error';
      }
    } else {
      if (display.textContent === '0') {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
  });
});