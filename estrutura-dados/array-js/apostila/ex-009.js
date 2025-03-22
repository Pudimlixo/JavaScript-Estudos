import inquirer from 'inquirer'

//Estrutura for que receberá os números:
console.log(`-----Lista com números, onde marca e mostra os números pares-----`)
let num = []

for(let c = 0;c <= 9;c++){
    const receberN = await inquirer.prompt({
        type:'number',
        name:'n',
        message:`Digite ${c+1}° número:`
    })

    num.push(receberN.n)
}

console.log(`-----Número digitados pelo usuário-----`)

console.log(num)

//Loop Condição que verifica se o valor da posição do vetor é par
console.log(`-----Valores que são pares e seus índices----`)

console.log(`Índices`)
for(let c = 0;c <= num.length - 1;c++){
    if(num[c] % 2 == 0){
        console.log(c)
    }
}

console.log(`Valores`)
for(let c = 0;c <= num.length - 1;c++){
    if(num[c] % 2 == 0){
        console.log(num[c])
    }
}