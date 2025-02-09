import inquirer from 'inquirer';

var questions = [
  {
    type: 'input',
    name: 'nota',
    message: "Digite primeira nota",
  },
  {
    type: 'input',
    name: 'nota2',
    message: "Digite segunda nota",
  },
]

console.log("----------MEDIA ENTRE DUAS NOTAS----------")

const resp = await inquirer.prompt(questions)

var media = (Number(resp.nota)+Number(resp.nota2))/2

console.log(`A média entre a nota ${resp.nota} e a segunda nota ${resp.nota2} do aluno cadastrado é igual a ${media}`)