import inquirer from "inquirer";

var questions = [
  {
    type: "input",
    name: "largura",
    message:"Digite a largura",
  },

  {
    type: "input",
    name: "altura",
    message: "Digite a altura:",
  },
]

console.log("------CÁLCULO DA ÁREA DE UMA SUPERFÍCIE------");
const resp = await inquirer.prompt(questions);

console.log(`A área da superfície com as medidas informadas é igual a ${Number(resp.altura)*Number(resp.largura)} metros quadrados`)

console.log("---------------------------------------------")
