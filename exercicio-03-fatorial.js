// 3. Recursion
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('O valor deve ser um inteiro maior ou igual a zero.');
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// Exemplo de uso
console.log('Fatorial de 5:', factorial(5));
