import inquirer from 'inquirer'


console.log(`Contagem com número inteiro positivo`)

const q = await inquirer.prompt(
    {
        type:'number',
        name:'final',
        message:"Digite um número para ver uma contagem ser realizada até ele:"
    }
)

let c = 0

while(c <= q.final){
    console.log(`Passo ${c}`)
    c++
}