//Cálculo de um fatorial de um número

import inquirer from 'inquirer'

const resp = await inquirer.prompt([
    {
        type: 'number',
        name: 'f',
        message: "Digite um valor para saber o fatorial desse número:"
    },
])

function fatorial(v){
    let fat = 1
    for(let c = v;c > 1;c--){
        fat *= c
    }

    return fat
}

console.log(`O fatorial do número ${resp.f} é igual a ${fatorial(resp.f)}`)


