import inquirer from 'inquirer';

var questions = [
  {
    type: 'input',
    name: 'num',
    message: "Digite o primeiro número:",
  },
  {
    type: 'input',
    name: 'num2',
    message: "Digite o segundo número:",
  },
]

console.log("-----SOMA ENTRE DOIS NÚMEROS------")

const resp = await inquirer.prompt(questions)

var soma = (Number(resp.num)+Number(resp.num2))

console.log(`A soma de ${resp.num}+${resp.num2} é igual a ${soma}`)

console.log("-----------------------------------------")