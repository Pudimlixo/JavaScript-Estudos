import inquirer from 'inquirer'

console.log(`-----Parâmetros de contagem por procedimento-----`)

function fazerLoop(x, y, z){
    if(y > x){
        while(x <= y){
            console.log(x)
            x += z
        }
    } else if(y < x){
        while(x >= y){
            console.log(x)
            x -= z
        }
    }
}

const param = await inquirer.prompt([{
    type:'number',
    name:'start',
    message:`Insira por onde começará a contagem:`
},
{
    type:'number',
    name:'end',
    message:`Insira por onde vai terminar a contagem:`
},
{
    type:'number',
    name:'jump',
    message:`Insira salto da contagem:`
}
])

fazerLoop(param.start,param.end,param.jump)