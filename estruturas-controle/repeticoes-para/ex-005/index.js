import inquirer from 'inquirer'

let pesosH = []
let maiorPesoH = 0
let mediaPesoM = 0
let hMais100 = 0
let qntdM = 0

console.log(`-----Analisador de informações-----`)

for(let c = 1;c <= 8;c++){
    const i = await inquirer.prompt([{
        type:'number',
        name:'sexo',
        message:`Digite sexo da ${c}a pessoa[1] para Homem, [2] para mulher: `
    },
    {
        type:'number',
        name:'peso',
        message:`Digite peso da ${c}a pessoa (em kg): `
    }
])

if(i.sexo < 1 && i.sexo > 2){
    console.log(`Opção inválida para sexo`)
}

if(i.sexo == 1){
    pesosH.push(i.peso)
}

if(i.sexo == 1 && i.peso > 100){
    hMais100++
}

if(i.sexo == 2){
    qntdM++
    mediaPesoM+=i.peso
}

maiorPesoH = Math.max(...pesosH)

}

console.log(`Maior peso entre os homens é ${maiorPesoH}kg`)
console.log(`Quantidade de homens com mais de 100kg é de ${hMais100}`)
console.log(`Mulheres cadastradas: ${qntdM}`)
console.log(`Média de peso entre as mulheres cadastradas: ${(mediaPesoM/qntdM).toFixed(2)}`)

