import inquirer from 'inquirer'

let a = []

//Declaração de 10 valores à lista

console.log(`===============================================`)
console.log(`-----Lista padrão-----`)

for (let c = 0;c<=9;c++) {
    const listA = await inquirer.prompt({
        type: 'number',
        name: 'n1',
        message: `Digite valor do ${c+1}° número da lista`
    })

    a[c] = Number(listA.n1)

}

function media(){
    let mediaV = 0

    for(let c = 0;c < a.length;c++){
        mediaV += a[c]
    }

    mediaV = mediaV/a.length

    console.log(`A média dos valores do array resulta em: ${mediaV}`)

}

media()

console.log(`===============================================`)