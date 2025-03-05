import inquirer from 'inquirer'

let homensSal = 0
let valSalH = 0
let valSalM = 0
let mulheresSal = 0
let resp = "S"

console.log(`=====Separação de salários de homens e mulheres=====`)

while(resp == "S"){
    const q = await inquirer.prompt([{
        type:'input',
        name:'sexo',
        message:'Digite gênero do funcionário cadastrado[1 para homem ou 2 para mulher]'
    }, 
    {
        type:'number',
        name:'salario',
        message:'Digite salário do funcionário cadastrado'
    }
])

if(q.sexo == 1){
    homensSal+=1
    valSalH+=q.salario
} else if(q.sexo == 2){
    mulheresSal+=1
    valSalM+=q.salario
} else{
    console.log(`Opção de sexo inválida, tente novamente`)
}

const finish = await inquirer.prompt({
    type:'input',
    name:'finishProgram',
    message:"Deseja continuar o programa?[S/N]"
})

if(finish.finishProgram == "S"){
    resp = finish.finishProgram
} else if(finish.finishProgram == "N"){
    resp = finish.finishProgram
    console.log(`Programa encerrado`)
} else{
    console.log(`Resposta inválida`)
}

}

console.log(`Quantidade de salários de homens da empresa:${homensSal}`)
console.log(`Quantidade de salários de mulheres da empresa:${mulheresSal}`)

console.log(`Salários dos homens somados: ${valSalH} Reais`)
console.log(`Salários das mulheres somados: ${valSalM} Reais`)

console.log(`===============================================`)
