import inquirer from 'inquirer'

let soma = 0
let c = 0


console.log(`================Sistema de parada de soma================`)
console.log(`Atenção: O número para parada da soma (1111) não vai contar como parte dela`)
while(c <= 9999){
    const resp = await inquirer.prompt({
        type:'number',
        name:'num',
        message:'Digite número para fazer um somatório (Para parar, digite o número 1111)'
    })

    soma+=resp.num
    if(resp.num == 1111){
        c = 9999
    }
    c++
}

console.log(`A soma dos números digitados no loop é igual a ${soma-1111}`)
console.log(`==========================================================`)