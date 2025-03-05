//A = A1 + (N-1)d
import inquirer from 'inquirer'
console.log(`-----Criação de uma progressão aritmética-----`)
console.log(`O programa só mostra os 10 primeiros termos dessa P.A`)
const t = await inquirer.prompt([{
    type:'number',
    name:'termo',
    message:`Insira o termo que desejar da P.A:`
},
{
    type:'number',
    name:'razao',
    message:`Insira a razão dessa P.A: `
}
])

for(let c = 1;c<=10;c++){
    if(c == 1){
        console.log(t.termo)
    } else{
        console.log(t.termo+=t.razao)
    }
}

console.log(`===============================================`)