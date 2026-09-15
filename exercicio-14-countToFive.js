// 14. setInterval
function countToFive() {
  let count = 1;
  const intervalId = setInterval(() => {
    console.log(count);

    if (count === 5) {
      clearInterval(intervalId);
    }

    count += 1;
  }, 1000);
}

// Exemplo de uso
countToFive();
