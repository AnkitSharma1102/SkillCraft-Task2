// let display = document.getElementById('display');
//     let currentInput = '';
//     let operator = '';
//     let previousInput = '';
//     let shouldResetDisplay = false;

//     function appendToDisplay(value) {
//       if (display.classList.contains('error')) {
//         clearDisplay();
//       }

//       if (shouldResetDisplay) {
//         display.value = '';
//         shouldResetDisplay = false;
//       }

//       if (['+', '-', '*', '/'].includes(value)) {
//         if (currentInput && previousInput && operator) {
//           calculateResult();
//         }
//         operator = value;
//         previousInput = display.value;
//         shouldResetDisplay = true;
//       } else {
//         if (value === '.') {
//           if (display.value.includes('.')) return;
//           if (!display.value) display.value = '0';
//         }
//         display.value += value;
//         currentInput = display.value;
//       }
//     }

//     function calculateResult() {
//       if (!previousInput || !operator || !currentInput) return;

//       let result;
//       const prev = parseFloat(previousInput);
//       const current = parseFloat(currentInput);

//       try {
//         switch (operator) {
//           case '+':
//             result = prev + current;
//             break;
//           case '-':
//             result = prev - current;
//             break;
//           case '*':
//             result = prev * current;
//             break;
//           case '/':
//             if (current === 0) throw new Error('Division by zero');
//             result = prev / current;
//             break;
//           default:
//             return;
//         }

//         result = Math.round(result * 1e9) / 1e9;
//         display.value = result.toString();
//         display.classList.remove('error');
//         currentInput = result.toString();
//         previousInput = '';
//         operator = '';
//         shouldResetDisplay = true;
//       } catch (error) {
//         display.value = 'Error';
//         display.classList.add('error');
//         currentInput = '';
//         previousInput = '';
//         operator = '';
//         shouldResetDisplay = true;
//       }
//     }

//     function clearDisplay() {
//       display.value = '';
//       display.classList.remove('error');
//       currentInput = '';
//       previousInput = '';
//       operator = '';
//       shouldResetDisplay = false;
//     }

//     function deleteLast() {
//       if (display.classList.contains('error')) {
//         clearDisplay();
//         return;
//       }
//       display.value = display.value.slice(0, -1);
//       currentInput = display.value;
//     }

//     document.addEventListener('keydown', function (event) {
//       const key = event.key;
//       if ('0123456789+-*/.='.includes(key) || key === 'Enter' || key === 'Escape' || key === 'Backspace') {
//         event.preventDefault();
//       }

//       if ('0123456789'.includes(key)) appendToDisplay(key);
//       else if (key === '+') appendToDisplay('+');
//       else if (key === '-') appendToDisplay('-');
//       else if (key === '*') appendToDisplay('*');
//       else if (key === '/') appendToDisplay('/');
//       else if (key === '.') appendToDisplay('.');
//       else if (key === '=' || key === 'Enter') calculateResult();
//       else if (key === 'Escape') clearDisplay();
      else if (key === 'Backspace') deleteLast();
    });

    display.focus();
