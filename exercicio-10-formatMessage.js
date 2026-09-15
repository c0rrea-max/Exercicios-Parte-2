// 10. Callbacks
function formatMessage(msg, formatter) {
  return formatter(msg);
}

// Exemplo de uso
console.log('Mensagem:', formatMessage('JavaScript', (msg) => msg.toUpperCase()));
