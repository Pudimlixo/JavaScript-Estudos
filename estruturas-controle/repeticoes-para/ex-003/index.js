console.log(`-----Tabuada de um número qualquer-----`)
import inquirer from 'inquirer'
const n = await inquirer.prompt({
    type:'number',
    name:'n',
    message:"Digite número para ver sua tabuada: "
})

for(let c = 1;c <= 10;c++){
    console.log(`${n.n}x${c} = ${n.n*c}`)
}

console.log(`========================================`)