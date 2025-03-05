//Definição do valor aleatório através de duasn funções atribuídas à uma variável

import inquirer from 'inquirer'

let randomValue = Math.floor(Math.random()*5)+1

console.log(`-----JOGO DO AZAR-----`)

console.log(`Regra do jogo: Advinhar um número entre 1 e 5`)

const resp = await inquirer.prompt({
    type:'Number',
    name:'num',
    message:"Digite um número aleatório para tentar advinhar!"
})


function teste(){
    if(resp.num == randomValue){
        return console.log(`Você acertou parábens!!!`)

    } else{
        return console.log(`Você errou, talvez na próxima...`)
    }

    if(resp.num < 1 || resp.num > 5){
        return console.log(`[ERRO] Você inseriu um número fora do intervalo do sorteio, tente novamente!`)
    }
}


teste()


console.log(`-------------------------------------------------`)



