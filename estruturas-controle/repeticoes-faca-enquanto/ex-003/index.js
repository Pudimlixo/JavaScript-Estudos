import inquirer from 'inquirer'

let c = 1
let resp = "S"
let somatorio = 0
let menorV = 0
let numeros = []
let qntdPares = 0
let media = 0

console.log(`-----Analisador de números-----`)

do{
    const q1 = await inquirer.prompt([{
        type:'number',
        name:'num',
        message:`Digite ${c}° número:`
    },
    {
        type:'input',
        name:'respF',
        message:`Deseja continuar o programa? [S/N]:`
    }
])

numeros.push(q1.num)
menorV = Math.min(...numeros)

somatorio+=q1.num
media+=q1.num

if(q1.num % 2 == 0){
    qntdPares++
}

if(q1.respF == "S"){
    c++
} else{
    resp = "N"
    console.log(`Programa encerrado`)
}
}while(resp == "S")

console.log(`Menor valor digitado: ${menorV}`)
console.log(`Soma dos números digitados: ${somatorio}`)
console.log(`Quantidade de números pares digitados ${qntdPares}`)
console.log(`Média entre os valores digitados: ${(media/c).toFixed(2)}`)
console.log(`========================================`)