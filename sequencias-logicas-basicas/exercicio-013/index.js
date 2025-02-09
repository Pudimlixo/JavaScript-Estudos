import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'salario',
        message:"Digite salário do funcionário"
    }
]

console.log("------AUMENTO DE SALÁRIO------")

const resp = await inquirer.prompt(questions)

let acrescimo = Number(resp.salario)*0.15

let novoSal = (Number(resp.salario))+Number(acrescimo)

console.log(`O novo salário do funcionário é igual a ${novoSal}`)

console.log("------------------------------------")