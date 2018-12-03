const listaTarefas = require('./lista-tarefas');
const interfaceTerminal = require('./interface');

function exibirOpcoes() {
  interfaceTerminal.exibirMenuPrincipal((input) => {
    switch (input.trim()) {
      case '1':
        return exibirTarefas();
      case '2':
        return adicionarTarefa();
      case '3':
        return concluirTarefa();
      case '4':
        return removerTarefa();
      case '0':
        return encerrarAplicacao();
      default:
        return exibirOpcoes();
    }
  });
}

function exibirTarefas() {
  listaTarefas.exibirTarefas();
  interfaceTerminal.exibirListaTarefas((input) => {
    exibirOpcoes();
  });
}

function adicionarTarefa() {
  interfaceTerminal.solicitarNomeTarefa((nome) => {
    nome = nome.trim();

    if (nome.length < 1)
      return exibirOpcoes();

    listaTarefas.adicionarTarefa(nome.trim());
    exibirOpcoes();
  });
}

function concluirTarefa() {
  interfaceTerminal.concluirTarefa((indice) => {
    indice = parseInt(indice);

    if (isNaN(indice))
      return exibirOpcoes();

    listaTarefas.atualizarTarefa(indice, true);
    exibirOpcoes();
  });
}

function removerTarefa() {
  interfaceTerminal.removerTarefa((indice) => {
    indice = parseInt(indice);

    if (isNaN(indice))
      return exibirOpcoes();

    listaTarefas.removerTarefa(indice);
    exibirOpcoes();
  });
}

function encerrarAplicacao() {
  interfaceTerminal.encerrarTerminal();
  listaTarefas.salvarListaTarefas();
  process.exit(0);
}

exibirOpcoes();