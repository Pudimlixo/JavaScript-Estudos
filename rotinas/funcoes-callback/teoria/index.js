//Funções callback fazem parte da programação assíncrona e servem para executar uma função após outra função ou método ser executado, recebendo a função callback como parâmetro. Logo, funções callback não são executadas quando criadas ou chamadas, mas somente dpois de um fluxo de código específico.


//Funçôes que servirão como callback
function exibirS(n){
    console.log(`A soma dos termos é igual a ${n}`)
}

function exibirSub(n){
    console.log(`A diferença dos termos é igual a ${n}`)
}

function exibirMul(n){
    console.log(`O produto dos termos é igual a ${n}`)
}

function exibirDiv(n){
    console.log(`A divisão dos termos é igual a ${n}`)
}



//Função executada antes do callback
function somar(a,b, cb/*Parâmetro que vai servir para referenciar a função de callback*/){
    let s = a+b
    cb(s)
}

function subtrair(a,b, cb/*Parâmetro que vai servir para referenciar a função de callback*/){
    let sub = a-b
    cb(sub)
}

function multiplicar(a,b, cb/*Parâmetro que vai servir para referenciar a função de callback*/){
    let mul = a*b
    cb(mul)
}

function dividir(a,b, cb/*Parâmetro que vai servir para referenciar a função de callback*/){
    let d = a/b
    cb(d)
}

somar(4, 5, exibirS)
subtrair(10, 3, exibirSub)
multiplicar(3, 2, exibirMul)
dividir(50, 2, exibirDiv)




