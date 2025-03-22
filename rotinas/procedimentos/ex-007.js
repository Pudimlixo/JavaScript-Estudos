import inquirer from 'inquirer'

console.log(`==================================================`)

function parOuImpar(x){
    if(x % 2 == 0){
        console.log(`O valor inserido é par`)
    } else{
        console.log(`O valor inserido é ímpar`)
    }
}

const numero = await inquirer.prompt({
    type:'number',
    name:'n',
    message:`Informe um número para verificar se ele é ímpar ou par:`
})

parOuImpar(numero.n)

console.log(`==================================================`)