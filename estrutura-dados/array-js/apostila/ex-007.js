import inquirer from 'inquirer'

//Estrutura de repetição que receberá os nomes:
console.log(`-----Lista com nomes de usuário invertida-----`)
let nomes = []

for(let c = 0;c <= 6;c++){
    const receberNomes = await inquirer.prompt({
        type:'input',
        name:'nome',
        message:`Digite nome do ${c+1}° usuário cadastrado:`
    })

    nomes.push(receberNomes.nome)
}

console.log(`Lista com nomes obtidos:`)

console.log(nomes)

console.log(`-----Lista com nomes invertidos-----`)

console.log(nomes.reverse())
