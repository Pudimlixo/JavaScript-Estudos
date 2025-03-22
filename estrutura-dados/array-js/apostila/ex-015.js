import inquirer from 'inquirer'

let sexoFunc = []
let nomes = []
let salarios = []

console.log(`-----Cadastro de funcionários-----`)

for (let c = 0; c <= 4; c++) {
    const infos = await inquirer.prompt([
        {
            type: 'input',
            name: 'nome',
            message: `Digite o nome do ${c+1}° cadastrado:`
        }, 
        {
            type: 'number',
            name: 'sexo',
            message: `Digite sexo do ${c+1}° cadastrado [1] Para homem, [2] Para mulher:`
        },
        {
            type: 'number',
            name: 'sal',
            message: `Digite salário do ${c+1}° cadastrado:`
        }
    ])

    nomes.push(infos.nome)
    sexoFunc.push(infos.sexo)
    salarios.push(infos.sal)
}


console.log(`-----Funcionários mulheres que ganham mais de 5 mil-----`)

for(let c = 0;c<=4;c++){
    if(sexoFunc[c] == 2 && salarios[c] > 5000){
        console.log(`Nome: ${nomes[c]} Reais`)
        console.log(`Salário: ${salarios[c]} Reais`)
    }
}