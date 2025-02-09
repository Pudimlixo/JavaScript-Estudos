import inquirer from 'inquirer'

const resp = await inquirer.prompt([
    {
        type: 'number',
        name: 'n1',
        message: "Digite um valor para uma soma:"
    },
    {
        type: 'number',
        name: 'n2',
        message: "Digite o segundo valor para a soma:"
    }
])

function somafunction(a=0,b=0){
    return a+b
}

console.log(`A soma dos dois números é igual a ${somafunction(resp.n1, resp.n2)}`)
