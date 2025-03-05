import inquirer from 'inquirer'

let maiorIdade = 0
let qntdH = 0
let mediaIdadeHomens = 0
let mulherIdademenor = 0
let idadesM = []
let idadesTot = []
let resp = "S"
let c = 0

console.log(`=====Estatísticas entre homens e mulheres=====`)

while(resp == "S"){
    const q = await inquirer.prompt([{
        type:'input',
        name:'sexo',
        message:'Digite gênero da pessoa cadastrada[1 para homem ou 2 para mulher]'
    }, 
    {
        type:'number',
        name:'idade',
        message:'Digite idade dessa pessoa:'
    }
])

idadesTot.push(q.idade)

if(q.sexo == 1){
    qntdH++
    mediaIdadeHomens+=q.idade
} else if(q.sexo == 2){
    idadesM.push(q.idade)
    mulherIdademenor = Math.min(...idadesM)
} else{
    console.log(`Opção de sexo inválida, tente novamente`)
}

maiorIdade = Math.max(...idadesTot)

const finish = await inquirer.prompt({
    type:'input',
    name:'finishProgram',
    message:"Deseja continuar o programa?[S/N]"
})

if(finish.finishProgram == "S"){
    resp = finish.finishProgram
    c++
} else if(finish.finishProgram == "N"){
    resp = finish.finishProgram
    console.log(`Programa encerrado`)
} else{
    console.log(`Resposta inválida`)
}

}

console.log(`Média de idade dos homens cadastrados ${mediaIdadeHomens/c.toFixed(2)}`)
console.log(`A mulher com menor idade tem ${mulherIdademenor} anos`)
console.log(`Foram ${qntdH} homens cadastrados`)
console.log(`A maior idade do grupo de pessoas cadastradas é igual a ${maiorIdade}`)

console.log(`===============================================`)
