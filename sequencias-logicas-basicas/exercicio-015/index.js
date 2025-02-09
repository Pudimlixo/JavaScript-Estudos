import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'dias',
        message:"Quantos dias o funcionário trabalhou no mês?",
    }
]

console.log("===========================================")

const resp = await inquirer.prompt(questions)

let salario = Number(resp.dias)*(8*25)

console.log(`O salário do funcionário é igual a R$${salario}`)

console.log("===========================================")