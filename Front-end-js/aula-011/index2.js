import inquirer from 'inquirer'


console.log("=======================================")
console.log("-----Ver se é brasileiro ou não-----")

const resp = await inquirer.prompt([
    {
        type:'input',
        name:'nac',
        message:'Digite o país em que você vive'
    }
])


if (resp.nac == "Brasil"){
    console.log(`Você vive em ${resp.nac}`)
    console.log(`Você é brasileiro`)
}
else{
    console.log(`Você vive em ${resp.nac}`)
    console.log(`Você é estrangeiro`)
}


console.log("=======================================")