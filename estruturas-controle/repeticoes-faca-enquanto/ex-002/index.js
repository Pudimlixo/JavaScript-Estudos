import inquirer from 'inquirer'

let c = 1
let resp = "S"
let media = 0
let maior21 = 0

console.log(`-----Analisador de idades-----`)

do{
    const q1 = await inquirer.prompt([{
        type:'number',
        name:'idade',
        message:`Digite a idade da ${c} pessoa cadastrada:`
    },
    {
        type:'input',
        name:'respF',
        message:`Deseja continuar o programa? [S/N]:`
    }
])

media+=q1.idade

if(q1.idade >= 21){
    maior21++
}

if(q1.respF == "S"){
    c++
} else{
    resp = "N"
    console.log(`Programa encerrado`)
}
}while(resp == "S")

console.log(`Total de idades digitadas: ${c}`)
console.log(`Média de idades digitadas: ${(media/c).toFixed(2)}`)
console.log(`Quantidade de pessoas cadastradas com 21 anos ou mais: ${maior21}`)
console.log(`========================================`)