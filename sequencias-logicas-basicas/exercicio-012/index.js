import inquirer from 'inquirer';

var questions = [
    {
        type:'input',
        name:'precoProduto',
        message:'Digite preço do produto',
    }
]

console.log("-----Desconto promocional de 5%-----")

const resp = await inquirer.prompt(questions)

let desconto = Number(resp.precoProduto)*0.05

let novoValor = resp.precoProduto-desconto

console.log((`O novo valor do produto com a promoção de 5% é de ${novoValor}`))

console.log("-------------------------------------")