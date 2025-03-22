import inquirer from 'inquirer'

let idades = []
let nomes = []

console.log(`-----Cadastro de idade e nome-----`)

for (let c = 0; c <= 8; c++) {
    const infos = await inquirer.prompt([
        {
            type: 'input',
            name: 'nome',
            message: `Digite o nome do ${c+1}° cadastrado:`
        }, 
        {
            type: 'number',
            name: 'idade',
            message: `Digite a idade do ${c+1}° cadastrado:`
        }
    ])

    nomes.push(infos.nome)
    idades.push(infos.idade)

}

console.log(`-----Informações dos menores de idade-----`)

for(let c = 0;c <= 8;c++){
    if(idades[c] < 18){
        console.log(`nome: ${nomes[c]}`)
        console.log(`idade: ${idades[c]}`)
    }
}

console.log(`===========================================`)