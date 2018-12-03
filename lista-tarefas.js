const armazenamento = require('./armazenamento');

let listaTarefas = armazenamento.carregarDados('tarefas.json');

module.exports.adicionarTarefa = function (nome) {
  let novaTarefa = {
    nome: nome,
    concluida: false
  }
  listaTarefas.push(novaTarefa);
  console.log(`Tarefa adicionada.`);
}

module.exports.removerTarefa = function (indice) {
  listaTarefas.splice(indice, 1);
  console.log(`Tarefa removida.`);
}

module.exports.atualizarTarefa = function (indice, concluida) {
  let tarefa = listaTarefas[indice];
  tarefa.concluida = concluida;
  listaTarefas[indice] = tarefa;
  console.log(`Tarefa atualizada.`);
}

module.exports.exibirTarefas = function () {
  if (listaTarefas.length < 1) {
    console.log(`Não existe nenhuma tarefa na lista.`);
    return;
  }

  console.log(`TAREFAS:`)
  console.log(`Indice\t| Concluida\t| Tarefa`);

  for (let i = 0; i < listaTarefas.length; i++) {
    let concluida = listaTarefas[i].concluida ? 'SIM' : 'NAO';
    console.log(`${i}\t| ${concluida}\t\t| ${listaTarefas[i].nome}`);
  }
}

module.exports.salvarListaTarefas = function () {
  armazenamento.salvarDados('tarefas.json', listaTarefas);
}