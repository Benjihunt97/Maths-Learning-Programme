const firstNumber = document.getElementById('first-number');
    const secondNumber = document.getElementById('second-number');
    const method = document.getElementById('method');
    const result = document.getElementById('result');

    function calculate() {
      const num1 = parseInt(firstNumber.value);
      const num2 = parseInt(secondNumber.value);
      let res = 0;

      switch (method.value) {
        case '+':
          res = num1 + num2;
          break;
        case '-':
          res = num1 - num2;
          break;
        case 'x':
          res = num1 * num2;
          break;
        case '/':
          res = num1 / num2;
          break;
      }

      result.textContent = res;
    }

    firstNumber.addEventListener('change', calculate);
    secondNumber.addEventListener('change', calculate);
    method.addEventListener('change', calculate);
