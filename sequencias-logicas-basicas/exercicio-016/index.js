import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'qntdC',
        message:'Quantos cigarros você fuma por dia?',
    },
    {
        type:'input',
        name:'qntdCAno',
        message:"Por quantos anos você já fumou?",
    }
]

console.log("=========================================")
console.log("-----CÁLCULO DO TEMPO DE REDUÇÃO DE VIDA DE UM FUMANTE-----")

const resp = await inquirer.prompt(questions)

let lifelose = (Number(resp.qntdC*10)*Number(resp.qntdCAno*365))/1440

console.log(`O valor de tempo perdido da pessoa fumante é igual a ${lifelose} dias`)
console.log("=========================================")