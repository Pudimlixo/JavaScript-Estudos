//Reajuste de salário de funcionário de acordo com anos em que ele trabalha na empresa

import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'name',
        message:"Digite nome do funcionário"
    },
    {
        type:'input',
        name:'cash',
        message:"Digite o valor do salário do funcionário"
    },
    {
        type:'input',
        name:'years',
        message:"Digite por quantos anos o funcionário trabalha na empresa"
    }
]


console.log("==========================================")
console.log("-----Reajuste de salário - SISTEMA-----")
const resp = await inquirer.prompt(questions)

if(Number(resp.years) <= 3){

    var reajuste = (Number(resp.cash)*0.03)+Number(resp.cash) //Cada reajuste reinicia a declaração da variável
    console.log(`O novo salário de ${resp.name} será de ${Number(reajuste)} reais`)

} else if((Number(resp.years) > 3) && (Number(resp.years) < 10)){

    var reajuste = (Number(resp.cash)*0.125)+Number(resp.cash)
    console.log(`O novo salário de ${resp.name} será de ${Number(reajuste)} reais`)


} else{
    
    var reajuste = (Number(resp.cash)*0.2)+Number(resp.cash)
    console.log(`O novo salário de ${resp.name} será de ${Number(reajuste)} reais`)
}

console.log("==========================================")