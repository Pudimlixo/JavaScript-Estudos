//Uma matriz em js nada mais é que um array que tem outros arrays guardados nele

//Declaração:

let matrizAleatoria = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(`-----Acesso à matriz-----`)
console.log(matrizAleatoria[1][1])

console.log(`-----Acesso à toda a matriz de uma vez-----`)
console.log(matrizAleatoria)

console.log(`-----Matriz em forma de lista:-----`)
//Para dispor a matriz em forma de uma lista, é necessário usar um loop aninhado com outro, para que um acesse a linha da matriz e outro acesse a coluna

for(let l = 0;l<=2;l++){
    for(let c = 0;c <= 2;c++){
        console.log(matrizAleatoria[l][c])
    }
}

console.log(`-----Matriz em forma de tabela-----`)
let tabela = ` `
//Para dispor uma matriz em forma de tabela, é necessário criar um loop aninhado igual o exemplo acima, porém também com condições dentro desse loop que vão separando as colunas e concatenando com uma quebra de linha

for(let l = 0;l <= 2;l++){
    let linha = ""
    for(let c = 0;c<=2;c++){
        linha += matrizAleatoria[l][c] + "\t" //Tabulação pra cada posição de coluna com a ajuda de uma variável 
    }

    tabela += linha+"\n" //quebra de linha para a próxima com \n e a ajuda de outra variável que guarda a matriz
}

console.log(tabela)

