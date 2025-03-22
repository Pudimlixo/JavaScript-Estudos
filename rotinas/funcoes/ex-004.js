import inquirer from 'inquirer'

console.log(`-----Super somador entre intervalo de números-----`)

let respS = 0

const resp = await inquirer.prompt([{
    type:'number',
    name:'start',
    message:`Insira por onde vai começar o intervalo:`
},
{
    type:'number',
    name:'fim',
    message:`Insira por onde vai começar o intervalo:`
}
])

if(resp.fim < resp.start){
    console.log(`[ERRO]Valor final menor que inicial`)
} else{

function superSoma(x,y){
    let soma = 0
    for(let c = x;c <= y;c++){
        console.log(c)
        soma+=x
    }

    return soma
}

respS = superSoma(resp.start,resp.fim)

console.log(`A soma do intervalo dos números digitados é ${respS}`)

}
