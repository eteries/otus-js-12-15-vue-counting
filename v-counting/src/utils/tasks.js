function getPrimes (max) {
  const sieve = [];
  const primes = [];
  for (let i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (let j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}

const primes = getPrimes(100);
const smallNumbers = [2, 3, 4, 5];

function selectNumbers (source, length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(source[Math.floor(Math.random() * source.length)]);
  }
  return arr;
}

function createTask (operations) {
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let operator, result, operands, biggest;

  switch (operation) {
    case 'addition': {
      const numbers = selectNumbers(primes, 3);
      result = numbers.reduce((prev, cur) => prev + cur);
      operands = [...numbers];
      operator = '+';
      break;
    }
    case 'subtraction': {
      const numbers = selectNumbers(primes, 3);
      biggest = numbers.reduce((prev, cur) => prev + +cur);
      result = numbers[0];
      operands = [biggest, ...numbers.splice(0, 2)];
      operator = '-';
      break;
    }
    case 'multiplication': {
      const numbers = selectNumbers(primes, 3);
      result = numbers.reduce((prev, cur) => prev * cur);
      operands = [...numbers];
      operator = '*';
      break;
    }
    case 'division': {
      const numbers = selectNumbers(primes, 3);
      biggest = numbers.reduce((prev, cur) => prev * cur);
      result = numbers[0];
      operands = [biggest, ...numbers.splice(0, 2)];
      operator = '/';
      break;
    }
    case 'power': {
      const numbers = selectNumbers(smallNumbers, 3);
      result = numbers.reduce((prev, cur) => prev ** cur);
      operands = [...numbers];
      operator = '**';
      break;
    }
  }

  const questions = operands.map(operand => ({value: operand, userValue: ''}));

  return {result, operator, questions};
}

function checkTask (answers, operator, correct) {
  let result;
  switch (operator) {
    case ('+'):
      result = answers.reduce((prev, cur) => +prev + +cur);
      break;
    case ('-'):
      result = answers.reduce((prev, cur) => prev - cur);
      break;
    case ('*'):
      result = answers.reduce((prev, cur) => prev * cur);
      break;
    case ('/'):
      result = answers.reduce((prev, cur) => prev / cur);
      break;
    case ('**'):
      result = answers.reduce((prev, cur) => prev ** cur);
      break;
  }

  return result === correct;
}

export { createTask, checkTask };
