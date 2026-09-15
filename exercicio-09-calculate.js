// 9. Callbacks
function calculate(a, b, callback) {
  return callback(a, b);
}

// Exemplo de uso
console.log('Callback de soma:', calculate(4, 2, (a, b) => a + b));
