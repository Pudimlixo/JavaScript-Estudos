import inquirer from 'inquirer'

let idades = []
let maiorIdade = 0
let media = 0

console.log(`-----Analisador de idades por vetores-----`)

for(let c = 0;c <= 7;c++){
    const receberIds = await inquirer.prompt({
        type:'number',
        name:'idade',
        message:`Digite ${c+1}a idade:`
    })

    idades.push(receberIds.idade)
    media+=idades[c]

    maiorIdade = Math.max(...idades)
}

console.log(`Posições de índice das pessoas com mais de 25 anos(Se houver)`)

for(let c = 0;c <= 7;c++){
    if(idades[c] > 25){
        console.log(c)
    } 
}

for(let c = 0;c <= 7;c++){
    if(idades[c] == maiorIdade){
        console.log(c)
    } 
}


console.log(`A média das idades inseridas é igual a : ${media/idades.length}`)
console.log(`A maior idade encontrada é de ${maiorIdade} anos`)
