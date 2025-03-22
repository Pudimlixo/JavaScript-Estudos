let numeros = []
let aux = 0

console.log(`-----Ordenação de vetores através do algoritmo de Bubble Sort-----`)

for(let c = 0; c <= 19;c++){
    numeros[c] = Math.floor(Math.random() * 99) - 1
}

console.log(`-----Vetor com valores brutos recebidos-----`)
console.log(numeros)

//Em um algoritmo de ordenação de valores num vetor, deve-se ter um loop dentro de outro que faça a troca até a pneúltima posição
for(let c = 0; c < numeros.length;c++){

    for(let i = 0; i < numeros.length-1;i++){
        if(numeros[i] > numeros[i+1]){
            aux = numeros[i]
            numeros[i] = numeros[i+1]
            numeros[i+1] = aux
        }
    }
}

console.log(`-----Vetor com valor ordenados-----`)
console.log(numeros)

console.log(`================================`)