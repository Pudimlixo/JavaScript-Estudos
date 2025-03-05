import inquirer from 'inquirer'

let c = 1
let s = 0
let m18 = 0
let m5 = 0
let maior = 0

console.log(`-----Analisador de dados 1-----`)

const firstIdade = await inquirer.prompt({
    type:'number',
    name:'i',
    message:`Digite a idade da 1a pessoa.`
})

maior = firstIdade.i

c++

while(c<=10){
    const idade = await inquirer.prompt({
        type:'number',
        name:'i',
        message:`Digite a idade da ${c}a pessoa.`
    })

    s += idade.i

    if(idade.i > 18){
        m18 += 1
    }

    if(idade.i < 5){ 
        m5 += 1
    }

    maior = Math.max(maior, idade.i)

    c++
}

console.log(`Média das idades: ${s/10}`)
console.log(`Estão na maioridade: ${m18}`)
console.log(`Menores de 5 anos: ${m5}`)
console.log(`Maior idade digitada: ${maior}`)

console.log(`===============================`)