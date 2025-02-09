//Soma de 500 até 0 com loop de 50

let c = 500
let soma = 0

while(c >= 0){
    console.log(c)
    soma += c
    c-= 50
}

console.log(`A soma dos números do looping regressivo é igual a ${soma}`)