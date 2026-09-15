// 12. Asynchronous callbacks (Callback Hell)
function fakeRequest(url, callback) {
  setTimeout(() => {
    callback(null, 'OK');
  }, 1000);
}

// Exemplo de uso
fakeRequest('https://api.exemplo.com/a', function (error, response) {
  console.log('Primeira requisição:', error, response);

  fakeRequest('https://api.exemplo.com/b', function (error2, response2) {
    console.log('Segunda requisição:', error2, response2);

    fakeRequest('https://api.exemplo.com/c', function (error3, response3) {
      console.log('Terceira requisição:', error3, response3);
    });
  });
});
