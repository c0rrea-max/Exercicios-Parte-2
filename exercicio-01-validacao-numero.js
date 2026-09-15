// 1. Parameters validation
function validateNumber(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    throw new Error('O valor deve ser um número.');
  }
  return true;
}

// Exemplo de uso
console.log(validateNumber(10));
