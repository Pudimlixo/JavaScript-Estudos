import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'km',
        message:"Digite valor que passageiro deseja percorer para cobrança (em km):"
    }
]

console.log("===========================================")
const resp = await inquirer.prompt(questions)


if(Number(resp.km) <= 200){
    console.log(`A cobrança da corrida vai ser igual a ${Number(resp.km*0.5)} reais`)
} else{
    console.log(`A cobrança da corrida vai ser igual a ${Number(resp.km*0.45)} reais`)
}

console.log("===========================================")