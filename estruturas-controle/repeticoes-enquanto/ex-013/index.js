import inquirer from 'inquirer'

let c = 2
let maior = 0
let menor = 0

console.log(`-----Leitura de preço de produtos-----`)

//Sempre que se fizer uma comparação de menor e maior valores, tem que definir o primeiro valor fora do loop para aí sim efetuar uma comparação

const q1 = await inquirer.prompt({
    type:'number',
    name:'price',
    message:`Digite preço do 1° produto`
})

maior = q1.price
menor = q1.price

while(c<=7){
const q = await inquirer.prompt({
    type:'number',
    name:'price',
    message:`Digite preço do ${c}° produto`
})

maior = Math.max(maior, q.price)
menor = Math.min(menor, q.price)

c++
}

console.log(`Maior preço cadastrdo: ${maior}`)
console.log(`Menor preço cadastrado: ${menor}`)

console.log(`======================================`)