//Soma de dois números através de uma variável composta

import inquirer from 'inquirer'

let numbers = []
let c = 1
let s = 0

while (c <= 2) {
    const resp = await inquirer.prompt(
        {
            type: 'number',
            name: 'num',
            message:`Digite o ${c}° valor para a soma:`
        }
    )

    numbers[c-1] = resp.num
    s += numbers[c-1]

    c++
}

console.log(`A soma dos dois números da lista [${numbers}] é igual a ${s}`)