//Uso de funções e teoria sobre funções em JS:

import inquirer from 'inquirer'

//É ideal colocar isso em uma função?
const v = await inquirer.prompt(
    {
        type: 'number',
        name: 'val',
        message: "Digite um valor para ver se ele é par ou ímpar:"
    }
)


/*Criar uma função básica que verifica se o número é ou não é ímpar*/

function parImp(n) {//Passagem de parâmetro n que serve como uma váriavel que só vai funcionar dentro daquele escopo
    if (n % 2 == 0) {
        return `O valor ${n} é par`
    } else {
        return `O valor ${n} é ímpar`
    }
}


let valueresp = parImp(v.val)

console.log(valueresp)