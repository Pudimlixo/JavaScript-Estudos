import inquirer from 'inquirer'

let c = 1
let par = 0
let imp = 0

console.log(`========================================================`)

while(c <= 6){
const resp = await inquirer.prompt(
    {
        type:'number',
        name:'n',
        message:`Digite ${c}° valor numérico inteiro:`
    }
)

if(resp.n % 2 == 0){
    par += 1
} else{
    imp += 1
}

c++
}

console.log(`Os números pares cadastrados foram ${par}`)

console.log(`Os números ímpares cadastrados foram ${imp}`)

console.log(`========================================================`)
