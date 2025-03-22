import inquirer from 'inquirer'

console.log(`-----Média de nota de um aluno-----`)

const resp = await inquirer.prompt([{
    type:'input',
    name:'n1',
    message:`Insira primeira nota:`
},
{
    type:'input',
    name:'n2',
    message:`Insira primeira nota:`
}])

function calcularNota(x,y){
    return (x+y)/2
}

let media = calcularNota(parseFloat(resp.n1), parseFloat(resp.n2))

console.log(`A média das duas notas é igual a ${media.toFixed(2)}`)