import inquirer from 'inquirer'

let qntdChaves = 0

console.log(`-----Chave aleatória-----`)
let num = []

for(let c = 0;c <= 30;c++){
    num[c] = Math.floor(Math.random() * 14) + 1 
}

const receberC = await inquirer.prompt({
    type:'number',
    name:'chave',
    message:`Digite alguma chave do programa:`
})

console.log(`-----ìndices de chave sorteada-----`)
for(let c = 0;c < num.length;c++){
    if(num[c] == receberC.chave){
        console.log(c)
        qntdChaves++
    }
}

if(qntdChaves == 0){
    console.log(`Nenhuma chave encontrada`)
} else{
    console.log(`Quantidade de Chaves sorteadas: ${qntdChaves}`)
}
