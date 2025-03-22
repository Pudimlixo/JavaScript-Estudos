import inquirer from 'inquirer'

console.log(`-----Soma de dois números por função-----`)

let soma = 0

async function receberNumeros(){
    const resp = await inquirer.prompt([
        {
            type:'number',
            name:'n1',
            message:'Informe primeiro número para realizar a soma'
        },
        {
            type:'number',
            name:'n2',
            message:'Informe segundo número para realizar a soma'
        }
    ])

    soma = fazerSoma(resp.n1, resp.n2)

    console.log(`A soma dos dois números digitados é igual a ${soma}`)
}

//Dúvida: uma função pode retornar 2 ou mais valores?

function fazerSoma(x, y){
    return x+y
}

receberNumeros()


