//Delta = b^2-4ac

import inquirer from 'inquirer';

var questions = [
  {
    type: "input",
    name: "a",
    message: "Digite o valor de A",
  },
  {
    type: "input",
    name: "b",
    message: "Digite o valor de B",
  },
  {
    type: "input",
    name: "c",
    message: "Digite o valor de C",
  },
]

console.log("-----Cálculo do valor de delta-----")
console.log("Delta = b^2-4ac")

const resp = await inquirer.prompt(questions);

resp.c = Number(resp.c)
resp.b = Number(resp.b)
resp.a = Number(resp.a)

let delta = (resp.b*resp.b)-4*(resp.a*resp.c)

console.log(`O valor de delta dado pelos valores digitados é igual a ${delta}`)

console.log("--------------------------------------")


