//Problema: Ler 3 coisas => valor total das compras, nome e sexo
//H -> 5% de desconto
//M -> 13% de desconto

import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'nome',
        message:"Digite nome da pessoa:"
    }
    ,
    {
        type:'input',
        name:'valTotal',
        message:"Digite valor total das compras da pessoa cadastrada:"
    },
    {
        type:'input',
        name:'sexo',
        message:"Digite sexo da pessoa que comprou em nossa loja[M/F]:"
    }
]

console.log("========================================================")
console.log("-----DESCONTO DE DIA DAS MOLIERES-----")
const resp = await inquirer.prompt(questions) //Ler dados do usuário e amarzenar na constante resp

if(String(resp.sexo) == "M"){
    var desconto = Number(resp.valTotal)+(Number(resp.valTotal)*0.5)
    console.log(`O valor do produto comprado por ${resp.nome} é igual a ${desconto}`)
} else if(String(resp.sexo) == "F"){
    var desconto = Number(resp.valTotal)+(Number(resp.valTotal)*0.13)
    console.log(`O valor do produto comprado por ${resp.nome} é igual a ${desconto}`)
} else{
    console.log(`O valor do produto comprado por ${resp.nome} é igual a ${desconto}`)
    console.log("Sexo digitado inválido")
}

console.log("========================================================")