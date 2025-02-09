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

function inversList(){
    let b = [] 
    /*Método .reverse() para inverter valores do array
    Ou método com percurso de vetor abaixo:
    */

    for(let c = 0;c<a.length;c++){//Num a.length, o último elemento sempre será a.length-1
        b[c] = a[a.length - (c+1)]
    }

    console.log(`A lista com seus valores invertidos: [${b}]`)
}

inversList()

console.log(`==============================================`)