//Soma de números em loop

import inquirer from 'inquirer'

const vezes = await inquirer.prompt(
    {
        type:'number',
        name:'vezes',
        message:"Deseja somar quantos termos?"
    }
)

async function somador(){
    let c = 1
    let s = 0

    while(c <= vezes.vezes){
        const num = await inquirer.prompt(
            {
                type:'number',
                name:'numeros',
                message:"Digite número que deseja somar:"
            }
        )

        s += num.numeros
        
        c++
    }

    console.log(`A soma dos números digitado são iguais a ${s}`)
}

somador()