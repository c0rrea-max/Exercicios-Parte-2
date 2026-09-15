// 2. Parameters validation
function validateUser(name, age) {
  return typeof name === 'string' && name.trim() !== '' && typeof age === 'number' && age >= 0;
}

// Exemplo de uso
console.log(validateUser('Maria', 25));
