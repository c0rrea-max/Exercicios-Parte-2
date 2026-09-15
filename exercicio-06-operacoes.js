// 6. Functions as first-class members
const operations = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
];

const results = operations.map((operation) => operation(4, 2));

// Exemplo de uso
console.log(results);
