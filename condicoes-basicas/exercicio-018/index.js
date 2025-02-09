import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'idade',
        message:"Digite ano de nascimento do cidadão para saber se ele pode votar ou não:"
    },
    {
        type:'input',
        name:'ano_Atual',
        message:"Digite ano atual da eleição em que se apresenta:" 
    }
]

console.log("================================================")
console.log("-----Suporte para saber se pode votar-----")
const resp = await inquirer.prompt(questions) //Perguntar idade da pessoa e do ano atual através do objeto criado

let anoNasc = Number(resp.ano_Atual)-Number(resp.idade) //Cálculo da idade da pessoa através de subtração do ano atual pela idade da pessoa cadastrada

if(Number(anoNasc) > 18){ //Condições para cada caso do cidadão
  console.log(`Pode votar, obrigatoriamente já que o cadastrado possui ${anoNasc} anos`)

} else if(Number(anoNasc) >= 16 && Number(anoNasc) < 18){
    console.log(`Pode votar, não obrigatoriamente já que o cadastrado possui ${anoNasc} anos`)
} else{
    console.log(`ainda não pode votar, já que o cadastrado possui ${anoNasc} anos, não podendo tirar título de eleitor`)
}
console.log("================================================")