// 5. Functions as first-class members
function applyFunction(fn, value) {
  return fn(value);
}

// Exemplo de uso
console.log('Aplicação:', applyFunction((x) => x * 2, 4));
