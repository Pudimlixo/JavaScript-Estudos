import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'num',
        message:"Digite qualquer número para verificar se ele é par ou ímpar:"
    }
]

console.log("=================================================")

const resp = await inquirer.prompt(questions) //lê o número digitado pelo usuário

if(Number(resp.num)%2 == 0){ //Condição que verifica se o número é par ou ímpar
    console.log(`O número ${Number(resp.num)} é par`)
}
else{
    console.log(`O número ${Number(resp.num)} é ímpar`)
}


console.log("=================================================")