import inquirer from 'inquirer'

let a = []

//Declaração de 10 valores à lista

console.log(`===============================================`)

for (let c = 0;c<=9;c++) {
    const listA = await inquirer.prompt({
        type: 'number',
        name: 'n1',
        message: `Digite valor do ${c+1}° número da lista`
    })

    a[c] = Number(listA.n1)

}

console.log(`Lista com os valores preenchidos: ${a}`)

function dobro(){
    let b = []

    for(let c = 0; c <= 9;c++){
        b[c] = a[c]*a[c]
    }

    console.log(`A segunda lista que mostra o quadrado dos valores da primeira: ${b}`)
}

dobro()

console.log(`===============================================`)