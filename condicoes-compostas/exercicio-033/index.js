//Valor da casa
//Salário do comprador
//Anos em que casa será paga
//Cálculo de prestação mensal para o comprador:

//Se for acima de 30%, o empréstimo é negado

/*Cálculo da Amortização:

Amortização = Valor do Empréstimo / Número de Parcelas

Cálculo dos Juros:

Juros = Saldo Devedor * Taxa de Juros Mensal

Prestação = Amortização + Juros*/

import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'$casa',
        message:"Digite valor da casa"
    },
    {
        type:'input',
        name:'$sal',
        message:"Digite salário do comprador:"
    },
    {
        type:'input',
        name:'anos',
        message:"Digite em quantos anos pretende pagar a casa:"
    }
]


console.log("===========================================")

console.log("-----Sistema bancário-----")
const resp = await inquirer.prompt(questions)

var amort = Number(resp.$casa)/Number(resp.anos*12) //Levei em conta a amortização e um juros fictício de 10%
var juros = 0.1*Number(resp.$sal)
var $prestacao = amort+juros

if(Number($prestacao) > 1.3*Number(resp.$sal)){ //30% excedendo = 100%+30% do salário
    console.log(`Empréstimo NEGADO por excessão do salário, seu salário é de ${Number(resp.$sal)} reais e a prestação excedeu com o valor de ${Number($prestacao.toFixed(2))} reais`)
} else{
    console.log(`Empréstimo APROVADO, prestação de ${Number($prestacao.toFixed(2))} reais`)
}



console.log("===========================================")