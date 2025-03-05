import inquirer from 'inquirer'

console.log(`----Jogo de advinhar-----`)
console.log(`Tente advinhar o número correto, você tem 4 tentaivas:`)
console.log(`Dica: O número é de 1 a 10`)

let c = 1
let num = Math.floor(Math.random * 10) - 1

while(c<=4){
    const resp = await inquirer.prompt({
        type:'number',
        name:'res',
        message:`Digite ${c}a tentativa:`
    })
    if(resp.res == num){
        c = 4
        console.log(`Parabéns, você ganhou!`)
    } else{
        console.log(`Resposta errada, tente novamente`)
    }

    if(resp.res != num && c == 4){
        console.log(`Você perdeu todas as tentivas. GAME OVER`)
    }

    c++
}

console.log(`==============================================`)