const readline = require('readline');
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solicitarInformacao(texto, callback) {
  readlineInterface.setPrompt(texto);
  readlineInterface.once('line', callback);
  readlineInterface.prompt();
}

module.exports.exibirMenuPrincipal = function (callback) {
  let texto = `Digite a opção desejada:
  1 - Exibir lista de tarefas
  2 - Adicionar nova tarefa
  3 - Concluir tarefa existente
  4 - Remover tarefa
  0 - Sair
  
  > `;

  solicitarInformacao(texto, callback);
}

module.exports.exibirListaTarefas = function (callback) {
  let texto = `Pressione ENTER para voltar ao menu.`;
  solicitarInformacao(texto, callback);
}

module.exports.solicitarNomeTarefa = function (callback) {
  let texto = `Digite um nome para a tarefa: `;
  solicitarInformacao(texto, callback);
}

module.exports.concluirTarefa = function (callback) {
  let texto = `Digite o índice da tarefa que deseja concluir: `;
  solicitarInformacao(texto, callback);
}

module.exports.removerTarefa = function (callback) {
  let texto = `Digite o índice da tarefa que deseja remover: `;
  solicitarInformacao(texto, callback);
}

module.exports.encerrarTerminal = function(){
  readlineInterface.close();
}