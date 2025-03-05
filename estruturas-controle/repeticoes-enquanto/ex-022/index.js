import inquirer from 'inquirer'

console.log(`-----Sistema de cadastro de pessoas-----`)

let resp = "S"
let c = 1
let idades = []
let idadesM = []
let menoridM = 0
let maiorIdade = 0
let nomeMaisvelho = ''
let nomeMaisnova = ''
let media = 0
let maiorH30 = 0
let menorM18 = 0

while(resp == "S"){
    const q = await inquirer.prompt([{
        type:'input',
        name:'nome',
        message:`Digite nome da ${c}a pessoa cadastrada:`
    },
    {
        type:'number',
        name:'idade',
        message:`Digite idade da ${c}a pessoa cadastrada:`
    },
    {
        type:'number',
        name:'sexo',
        message:`Digite sexo da ${c}a pessoa cadastrada: ([1] para Masculino, [2] para Feminino)`
    }
])

    if(q.sexo < 1 && q.sexo > 2){
        console.log(`Opção de sexo inválida, tente novamente`)
    }

    idades.push(q.idade)

    if(q.sexo == 2){
        idadesM.push(q.idade)
    }

    menoridM = Math.min(...idadesM)
    maiorIdade = Math.max(...idades)

    if(q.idade == maiorIdade){
        nomeMaisvelho = q.nome
    }

    if(q.idade == menoridM){
        nomeMaisnova = q.nome
    }

    if(q.idade > 30 && q.sexo == 1){
        maiorH30++
    }

    if(q.idade < 18 && q.sexo == 2){
        menorM18++
    }

    media+=q.idade

    const finishProgram = await inquirer.prompt({
        type:'input',
        name:'finish',
        message:'Deseja continuar o programa? [S/N]'
    })

    if(finishProgram.finish == "N"){
        resp = "N"
        console.log(`Programa encerrado`)
    } else{
        c++
    }
}

console.log(`Homens cadastrados com mais de 30 anos: ${maiorH30}`)
console.log(`Mulheres cadastradas com menos de 18 anos: ${menorM18}`)
console.log(`Média de idade dos cadastrados: ${(media/c).toFixed(2)}`)
console.log(`Nome do mais velho cadastrado é ${nomeMaisvelho}`)
console.log(`O nome da mulher mais jovem cadastrada é ${nomeMaisnova}`)

console.log(`==========================================`)