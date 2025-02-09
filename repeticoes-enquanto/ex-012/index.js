//Math.random() -> Função que gera qualquer número racional entre 0 e 1, com eles inclusos. Como mirar algum intervalo?
//Math.floor() -> Arredonda um número inteiro um valor para baixo

let c = 0
let mFive = 0
let div3 = 0

console.log(`-----SORTEIO DE NÚMEROS-----`)
while(c<=20){
    let n = Math.floor(Math.random() * 10) + 1//Uma unidade adicionada para não sofrer o arredondamento
    console.log(n)

    if(n > 5){
        mFive += 1
    }

    if(n % 3 == 0){
        div3 += 1
    }

    c++
}

console.log(`Quantidade de números sorteados maior que cinco: ${mFive}`)
console.log(`Quantidade de números sorteados que são divisíveis por três: ${div3}`)

console.log(`------------------------------------------`)