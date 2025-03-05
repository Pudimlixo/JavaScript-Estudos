import inquirer from 'inquirer'

let c = 1

let mediaAltura = 0
let mais90kg = 0
let menos50kgE160 = 0
let mais100kgE190 = 0

console.log(`-----Analisador de dados 3-----`)

while(c <= 7){
    const q = await inquirer.prompt({
        type:'input',
        name:'peso',
        message:`Digite o peso da ${c} pessoa a ser cadastrada[em kg]:`,
    })

    const q2 = await inquirer.prompt({
        type:'input',
        name:'altura',
        message:`Digite a altura da ${c} pessoa a ser cadastrada [em cm]:`,
    })

    mediaAltura += q2.altura
    if(q.peso > 90){
        mais90kg++
    }

    if(q.peso > 100 && q2.altura > 1.90){
        mais100kgE190++
    }

    if(q.peso < 50 && q2.altura < 1.60){
        menos50kgE160++
    }

    c++
}

console.log(`Média de altura das pessoas cadastradas: ${mediaAltura.toFixed(2)}`)
console.log(`Quantidade de pessoas que pesam mais de 90kg:${mais90kg}`)
console.log(`Quantidade de pessoas que pesam menos de 50kg e tem menos de 1,60:${menos50kgE160}`)
console.log(`Quantidade de pessoas que pesam mais de 100kg e tem mais de 1,90:${mais100kgE190}`)

console.log(`=======================================`)