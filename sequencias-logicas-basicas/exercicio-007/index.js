import inquirer from "inquirer";

var questions = [
    {
        type:'input',
        name:'num',
        message:"Digite um número para ver seu dobro e sua terça parte",
    }
]

const resp = await inquirer.prompt(questions)

console.log(`Terça parte do número digitado: ${Number(resp.num)/3}`)

console.log(`Dobro do número digitado: ${Number(resp.num)*2}`)

console.log("-----------------------------------------------------------")
