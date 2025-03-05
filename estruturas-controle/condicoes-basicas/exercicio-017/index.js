import inquirer from 'inquirer'

var questions = [
    {
        type: 'input',
        name: 'kmRodado',
        message: "Quantos quilômetros foram rodados pelo piloto?"
    }
]

console.log("==============================================")
console.log('-----RADAR DE MULTA-----')
const resp = await inquirer.prompt(questions)

if (Number(resp.kmRodado) <= 80) {
    console.log('Não multado')
} else{
    let val_multa = (Number(resp.kmRodado)-80) * 5
    console.log(`O valor da multa aplicada ao piloto será de ${val_multa} Reais`)
}

console.log("==============================================")