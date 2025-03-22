import inquirer from 'inquirer'

async function verificarMedia(){

let respMedia = 0
let respSituacao = ` `

const resp = await inquirer.prompt([
    {
        type:'number',
        name:'n1',
        message:`Insira a primeira nota:`
    },
    {
        type:'number',
        name:'n2',
        message:`Insira a segunda nota:`
    },
    {
        type:'number',
        name:'n3',
        message:`Insira a terceira nota:`
    }
])

function media(x,y,z){
    let m = (x+y+z)/3
    return m
}

respMedia = media(resp.n1,resp.n2,resp.n3)

function situacao(x){
    if(x <= 5){
        return console.log(`A média de nota desse aluno é ${x.toFixed(2)}, REPROVADO`)
    } else if(x >= 6 && x <= 7){
        return console.log(`A média de nota desse aluno é ${x.toFixed(2)}, RECUPERAÇÃO`)
    } else{
        return console.log(`A média de nota desse aluno é ${x.toFixed(2)}, APROVADO`)
    }
}

respSituacao = situacao(respMedia)

}

verificarMedia()