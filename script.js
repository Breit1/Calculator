document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.int');
  const pole = document.querySelector('.pole-vvoda');
  const ravno = document.querySelector('.ravno');
  let currentValue = '';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent;

      switch (buttonText) {
        case 'Backspace':
          pole.textContent = currentValue.slice(0, -1);
          currentValue = pole.textContent;
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          pole.textContent += buttonText;
          currentValue = pole.textContent;
          break;
        case '=':
          try {
            const result = eval(currentValue);
            pole.textContent = currentValue + '=' + result;
            previousExpression = currentValue;
            currentValue = result;
          } catch (error) {
            pole.textContent = 'Ошибка';
          }
          break;
        case 'C':
          pole.textContent = '';
          currentValue = '';
          break;
        default:
          pole.textContent += buttonText;
          currentValue = pole.textContent;
          break;
      }
    });
  });

  const zeroButton = document.querySelector('.zero');
  zeroButton.addEventListener('click', () => {
    pole.textContent += '0';
    currentValue = pole.textContent;
    
  });


  ravno.addEventListener('click', () => {
    try {
      const result = eval(currentValue);
      pole.textContent = currentValue + '=' + result;
      previousExpression = currentValue; 
      currentValue = result;
    } catch (error) {
      pole.textContent = 'Ошибка';
    }
  });
});

document.addEventListener('keydown', (event) => {
  const key = event.key;

  switch (key) {
    case 'Backspace':
      const clearButton = document.querySelector('[data-key="Backspace"]');
      if (clearButton) {
        clearButton.click();
      }
      break;

    case 'Delete':
      const  DeleteButton = document.querySelector('[data-key="C"]');
      if (DeleteButton) {
        DeleteButton.click();
      }
      break;
    
    
    case '+':
      const plusButton = document.querySelector('[data-key="plus"]');
      if (plusButton) {
        plusButton.click();
      }
      break;
    case '-':
      const minusButton = document.querySelector('[data-key="minus"]');
      if (minusButton) {
        minusButton.click();
      }
      break;
    case '*':
      const umnButton = document.querySelector('[data-key="umn"]');
      if (umnButton) {
        umnButton.click();
      }
      break;
    case '/':
      const delenButton = document.querySelector('[data-key="delen"]');
      if (delenButton) {
        delenButton.click();
      }
      break;
    case 'Enter':
      const equalButton = document.querySelector('[data-key="ravno"]');
      if (equalButton) {
        equalButton.click();
      }
      break;
    case '0':
      const zeroButton = document.querySelector('[data-key="0"]');
      if (zeroButton) {
        zeroButton.click();
      }
      break;
    default:
      const button = document.querySelector(`[data-key="${key}"]`);
      if (button) {
        button.click();
      }
      break;
  }
});
