import inquirer from "inquirer";

var questions = [
  {
    type: "input",
    name: "dinheiro",
    message:"Digite o quanto de dinheiro você tem na carteira para ver sua conversão em dólares:",
  }
];


console.log("------CONVERSÃO DE MOEDA------")
const resp = await inquirer.prompt(questions)

//1 real = 6 Dólares

console.log(`A quantidade de dinheiro que você possui em reais equivale a ${Number(resp.dinheiro)*6}$`)
console.log("------------------------------")
