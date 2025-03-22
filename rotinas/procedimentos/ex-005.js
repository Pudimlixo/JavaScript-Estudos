import inquirer from 'inquirer'

function somador(x,y){
    console.log(x+y)
}

const numeros = await inquirer.prompt([
    {
        type:'number',
        name:'n1',
        message:`Digite primeiro número para a soma:`
    },
    {
        type:'number',
        name:'n2',
        message:`Digite segundo número para a soma:`
    }
]
)

somador(numeros.n1, numeros.n2)