//Problema: Ler idade de um rapaz, se for menor que 18, mostrar quantos anos faltam para o alistamento, se for maior, mostrar quantos ano já se passaram

import inquirer from "inquirer"

var questions = [
    {
        type:'input',
        name:'idade',
        message:"Digite idade do rapaz para saber sua situação em relação ao alistamento militar"
    }
]

console.log("=============================================")
const resp = await inquirer.prompt(questions)


//A ordem das condições no if e else importam
if (Number(resp.idade) < 18){
    console.log(`Falta somente ${18-Number(resp.idade)} anos para você se alistar`)
} else if(Number(resp.idade > 18)){
    console.log(`Você tem ${Number(resp.idade)} anos e o seu alistamento já passou faz ${Number(resp.idade-18)} anos`)
} else {
    console.log(`Você já tem 18 anos e é hora do alistamento militar`)
}

console.log("=============================================")