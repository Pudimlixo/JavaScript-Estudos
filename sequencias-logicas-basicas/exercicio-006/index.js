import inquirer from 'inquirer';

var questions = [
  {
    type: 'input',
    name:  'num',
    message: "Digite um número para ver seu sucessor e antecessor",
  },
];

console.log("-----ANTECESSOR E SUCESSOR DE UM NÚMERO-----")

const resp = await inquirer.prompt(questions)

console.log(`O sucessor de ${Number(resp.num)} é ${Number(resp.num) + 1} e seu antecessor é ${Number(resp.num) - 1}`)

console.log("--------------------------------------------------")
