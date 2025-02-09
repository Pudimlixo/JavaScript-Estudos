import inquirer from 'inquirer'

let c = 1
let qntdH = 0
let qntdM = 0
let s = 0
let mediaH = 0
let mMais20 = 0

console.log(`-----Analisador de dados 2-----`)

while(c<=5){
    const infos = await inquirer.prompt([{
        type:'number',
        name:'i',
        message:`Digite a idade da ${c}a pessoa.`
    },
    {
        type:'string',
        name:'s',
        message:`Digite sexo da ${c}a pessoa. [M/H]`
    }
])

    s += infos.i

    if(infos.s == 'M'){
        qntdM++
    } else if(infos.s == 'H'){
        qntdH++
        mediaH+=infos.i
    } else{
        console.log(`Digite uma opção válida`)
    }

    if(infos.i > 20 && infos.s == 'M'){
        mMais20++
    }

    c++
}

console.log(`Quantidade de homens cadastrados: ${qntdH}`)
console.log(`Quantidade de mulheres cadastradas: ${qntdM}`)
console.log(`Média de idade dos homens: ${mediaH/5}`)
console.log(`Mulheres maiores de 20 anos: ${mMais20}`)
console.log(`Média de idade do grupo: ${s/5}`)

console.log(`===============================`)