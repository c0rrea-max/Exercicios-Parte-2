// 11. Asynchronous callbacks
function fakeRequest(url, callback) {
  setTimeout(() => {
    callback(null, 'OK');
  }, 1000);
}

// Exemplo de uso
fakeRequest('https://api.exemplo.com/a', function (error, response) {
  console.log('Primeira requisição:', error, response);
});
