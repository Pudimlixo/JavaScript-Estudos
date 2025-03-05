//Vetor a, b e voter c que é a soma de todos os valores do vetor a e b

import inquirer from 'inquirer'

let a = []
let b = []
let listC = []

//Declaração de 10 valores à primeira lista

console.log(`===============================================`)
console.log(`-----Primeira lista-----`)
for (let c = 0;c<=9;c++) {
    const listA = await inquirer.prompt({
        type: 'number',
        name: 'n1',
        message: `Digite valor do ${c+1}° número da lista`
    })

    a[c] = Number(listA.n1)

}

//Declaração de 10 valores à segunda lista
console.log(`-----Segunda lista-----`)
for (let c = 0;c<=9;c++) {
    const listB = await inquirer.prompt({
        type: 'number',
        name: 'n2',
        message: `Digite valor do ${c+1}° número da lista`
    })

    b[c] = Number(listB.n2)

}

console.log(`Valores da lista A: ${a}`)
console.log(`Valores da lista B: ${b}`)


function somaLista(){
    let soma = 0

    for(let c = 0;c<=9;c++){
        listC[c] = a[c]+b[c]
    }

    console.log(`Valores de lista C com cada elemento sendo a soma respectiva dos valores de elementos iguais de A e B: ${listC}`)

    for(let c=0;c<=9;c++){
        soma += listC[c]
    }

    console.log(`Valor da soma total dos valores dos elementos de A e B: ${soma}`)
}

somaLista()


console.log(`===============================================`)
