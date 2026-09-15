// 4. Recursion
function countDown(n) {
  if (n <= 0) {
    return;
  }

  console.log(n);
  countDown(n - 1);
}

// Exemplo de uso
countDown(5);
