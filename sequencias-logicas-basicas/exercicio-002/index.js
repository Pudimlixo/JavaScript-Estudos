import inquirer from 'inquirer';

var questions = [
    {
        type:'input',
        name:'nome',
        message:"Digite seu nome"
    }
]

const resp = await inquirer.prompt(questions)

console.log(`Olá ${resp.nome}! É um prazer te conhecer`)