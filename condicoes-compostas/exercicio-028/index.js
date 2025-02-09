//problema: calcular um terreno de área retângular e classificá-lo de acordo com sua área
import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'largura',
        message:"Digite a largura desse terreno"
    },
    {
        type:'input',
        name:'cump',
        message:"Digite o comprimento desse terreno"
    }
]

console.log("========================================")
console.log("-----Classificação de terreno por sua área-----")
const resp = await inquirer.prompt(questions)

function area(a, b){
    return a*b
}

let arearet = area(Number(resp.largura), Number(resp.cump))

console.log(`A área do terreno mede ${arearet} m²`)

if(arearet <= 100){
    console.log(`É um terreno popular`)
} else if((arearet > 100) && (arearet < 500)){
    console.log(`É um terreno master`)
} else{
    console.log(`É um terreno vip`)
}


console.log("========================================")