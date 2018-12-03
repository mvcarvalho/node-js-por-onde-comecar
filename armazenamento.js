const fs = require('fs');

module.exports.salvarDados = function (nomeArquivo, dados) {
  fs.writeFileSync(nomeArquivo, JSON.stringify(dados), 'utf-8');
}

module.exports.carregarDados = function (nomeArquivo) {
  if (fs.existsSync(nomeArquivo)) {
    let dados = fs.readFileSync(nomeArquivo, 'utf-8');
    return JSON.parse(dados);
  } else {
    return [];
  }
}