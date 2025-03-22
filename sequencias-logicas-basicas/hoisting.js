//Teoria do que é hoisting em JavaScript:
/*
Hoisting = Içamento ou levantamento

Como funciona? Basicamente, uma variável que tem um valor atribuído nela, depois declarada com a palavra reservada "var", faz com que o programa faça um levantamento daquela variável no topo do escopo onde ela estiver, executando o comportamento ocorrido com ela independente de onde for atribúido um valor nela
*/

/*
y = 8 //Inicialização antes da execução

console.log(`Valor de variável em içamento: ${y}`)//Execução que vai fazer o y ter o valor 8 mesmo estando embaixo, desrespeitando o fluxo do programa.

var y; //Declaração bem depois da execução*/

//Detalhe: Esse içamento só funciona quando a variável em questão for declarada com "var", por isso sempre evitar usar var e sim let ou const nessas declarações para não ter içamento desnecessário