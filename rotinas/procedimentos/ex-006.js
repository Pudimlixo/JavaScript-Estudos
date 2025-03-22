import inquirer from 'inquirer'

console.log(`-----Comparação entre dois números por procedimento-----`)

let maior = 0

function Maior(x,y){
    let valores = []
    valores.push(x)
    valores.push(y)

    maior = Math.max(...valores)

    if(x == y){
        console.log(`Os valores inseridos são iguais`)
    } else{
        console.log(`O maior valor digitado é ${maior}`)
    }
}

const numeros = await inquirer.prompt([{
    type:'number',
    name:'n1',
    message:`Informe o primeiro número:`
},
{
    type:'number',
    name:'n2',
    message:`Informe o segundo número:`
}
])



Maior(numeros.n1,numeros.n2)