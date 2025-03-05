//IMC = peso/altura**2

import inquirer from 'inquirer'

console.log(`==============================================`)
console.log(`-----CÁLCULO DE ÍNDICE DE MASSA CORPORAL`)

const q = await inquirer.prompt(
    {
        type:'Number',
        name:'altura',
        message:"Digite sua altura[Em metros]"
    }
)

const q2 = await inquirer.prompt(
    {
        type:'Number',
        name:'peso',
        message:"Digite seu peso[Em kg]"
    }
)

function calculoIMC(){
    let imc = q2.peso/(q.altura*q.altura)

    imc = imc.toFixed(3)

    if(imc < 18.5){

        console.log(`Seu imc é de ${imc} e você está classificado como Abaixo do peso`)

    } else if(imc >= 18.5 && imc <= 25){

        console.log(`Seu imc é de ${imc} e você está classificado como Peso ideal`)

    } else if(imc > 25 && imc <= 30){

        console.log(`Seu imc é de ${imc} e você está classificado como Acima do peso`)

    } else if(imc > 30 && imc <= 40){

        console.log(`Seu imc é de ${imc} e você está classificado como Obeso`)

    } else{

        console.log(`Seu imc é de ${imc} e você está classificado como Obeso mórbido`)

    }

}

calculoIMC()

console.log(`==============================================`)