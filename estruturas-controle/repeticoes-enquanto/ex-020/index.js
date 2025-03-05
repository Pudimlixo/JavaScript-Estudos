import inquirer from 'inquirer'

let qntdAlunos = 0
let mediaIdade = 0
let idadeIns = 0
let c = 1

console.log(`-----Mapeamento de alunos de uma sala-----`)
console.log(`Digite a idade 999 para encerrar o programa (Ela não será considerada)`)
while(idadeIns != 999){
    const q = await inquirer.prompt({
        type:'number',
        name:'idade',
        message:`Digite idade do ${c}° aluno:`
    })

    idadeIns = q.idade
    qntdAlunos++
    mediaIdade+=q.idade

    if(idadeIns == 999){
        console.log(`Sistema encerrado`)
    }
    c++
}

console.log(`A média de idade dos ${qntdAlunos-1} alunos cadastrados é igual a ${(mediaIdade-999)/c.toFixed(2)}`)
console.log(`=========================================`)