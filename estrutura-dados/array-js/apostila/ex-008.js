import inquirer from 'inquirer'

//Estrutura for que receberá os números:
console.log(`-----Lista com números, onde marca os múltiplos de 10-----`)
let num = []

for(let c = 0;c <= 14;c++){
    const receberN = await inquirer.prompt({
        type:'number',
        name:'n',
        message:`Digite ${c+1}° número:`
    })

    num.push(receberN.n)
}

console.log(`-----Número digitados pelo usuário-----`)

console.log(num)

//Loop Condição que verifica se o valor da posição do vetor é múltiplo de 10
console.log(`-----Índices dos números que são múltiplos de 10-----`)
for(let c = 0;c <= num.length - 1;c++){
    if(num[c] % 10 == 0){
        console.log(c) //Tentei usar o index.Of, porém ele só encontra primeira ocorrência
    }
}