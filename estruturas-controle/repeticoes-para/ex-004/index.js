import inquirer from 'inquirer'

const fim = await inquirer.prompt({
    type:'number',
    name:'n',
    message:"Digite número para ser o final da contagem: "
})

for(let c = 0;c<= fim.n;c++){
    console.log(c)
}

console.log(`FIM`)