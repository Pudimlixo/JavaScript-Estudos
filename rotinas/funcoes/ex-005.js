import inquirer from 'inquirer'

let respPotencia = 0

async function CalcularPotencia(){

const termos = await inquirer.prompt([{
    type:'number',
    name:'base',
    message:'Insira base da potência:'
},
{
    type:'number',
    name:'exp',
    message:'Insira o expoente da potência'
}
]);

function potencia(x,y){
    let p = x**y;
    return p
}

respPotencia = potencia(termos.base,termos.exp)
console.log(`O resultado da expressão de potenciação declarada é igual a ${respPotencia}`)

}


CalcularPotencia()