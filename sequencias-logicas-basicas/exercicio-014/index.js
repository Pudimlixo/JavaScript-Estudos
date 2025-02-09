import inquirer from 'inquirer';

var questions = [
  {
    type: 'input',
    name: 'kmrodado',
    message: "Digite quantidade de quilômetros rodados pelo carro alugado:"
  },
  {
    type: 'input',
    name: 'dias',
    message: "Digite a quantidade de dias que o carro ficou alugado:"
  }
]

console.log("-----COBRANÇA DE ALUGUEL POR CARRO-----")

const resp = await inquirer.prompt(questions)

let valor = (Number(resp.kmrodado)*0.2)+(Number(resp.dias)*90)

console.log(`O valor total a ser pago pelo aluguel do carro é de ${valor}`)

console.log("-----------------------------------------")