//Ler dois números inteiros e comparar eles, para ver qual é o maior, qual é o menor ou se eles são iguais

import inquirer from 'inquirer'

var questions = [
    {
        type: 'input',
        name: 'num1',
        message: "Digite um número"
    },
    {
        type: 'input',
        name: 'num2',
        message: "Digite outro número"
    }
]

console.log("======================================================")
console.log("-----COMPARAÇÃO ENTRE DOIS NÚMEROS-----")

const resp = await inquirer.prompt(questions)

const num1 = Number(resp.num1) //Constante para as variáveis sempre guardarem números
const num2 = Number(resp.num2)


//estrutura de controle para verificar qual número é maior, ou se ambos são iguais através de uma função simplificada que retorna o maior e menor valor entre as duas variáveis
if(resp.num1 == resp.num2){
    console.log(`Os dois números digitados são iguais`)

} else {
    const maior = Math.max(resp.num1, resp.num2)
    const menor = Math.min(resp.num1, resp.num2)
    console.log(`O maior número digitado é o ${maior}, e menor número digitado é o ${menor}`)
}

console.log("======================================================")

//Em uma lógica sem simplificações, assumimos que o primeiro valor digitado é o maior e o menor ao mesmo tempo, e se utiliza uma estrutura condicional para ver se o segundo valor é maior ou menor que o primeiro, assim mudando o fluxo.