import inquirer from 'inquirer';

var questions = [
    {
        type:'input',
        name:'nome',
        message:"Digite seu nome"
    }
    ,
    {
        type:'input',
        name:'salario',
        message:"Digite valor do seu salário"
    }
]

const resp = await inquirer.prompt(questions)

console.log("-----------------------------------")

console.log(`Nome do funcionário: ${resp.nome}`)

resp.salario = Number(resp.salario)

console.log(`Salário do funcionário: ${resp.salario}`)

console.log(`O funcionário ${resp.nome} tem um salário de R$${resp.salario}, em junho`)

console.log("-----------------------------------")