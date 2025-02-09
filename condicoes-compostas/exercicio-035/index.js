import inquirer from 'inquirer'

console.log(`=======================================`)
async function escolha(){
    console.log(`-----Registro de aluguel de carros-----`)
    console.log(`Escolha o tipo de carro que foi alugado`)
    
    const q1 = await inquirer.prompt(
        {
            type:'Number',
            name:'opcao',
            message:"Digite [1] para CARRO POPULAR ou [2] para CARRO DE LUXO"
        }
    )

    if(q1.opcao == 1){
        carroP()
    } else if(q1.opcao == 2){
        carroL()
    } else{
        console.log(`[ERRO] Opção inválida`)
    }

}

async function carroP(){

    //Quando se tem mais de uma pergunta, deve-se ter um array de objetos para conter as duas perguntas

    const q2 = await inquirer.prompt([
        {
            type:'number',
            name:'dias',
            message:"Insira quantos dias ficou com a posse do carro"
        },
        {
            type:'number',
            name:'km',
            message:"Insira quantos quilômetros você percorreu com o carro"
        }]
    )

    let aluguel = (q2.dias*90)

    if(q2.km <= 100){

        aluguel += (q2.km*0.2)
        console.log(`O valor do aluguel a ser pago pelo carro será de R$${Number(aluguel.toFixed(2))}`)

    } else {

        aluguel += q2.km*0.1
        console.log(`O valor do aluguel a ser pago pelo carro será de R$${Number(aluguel.toFixed(2))}`)

    } 

}

async function carroL(){

    const q3 = await inquirer.prompt([
        {
            type:'number',
            name:'dias',
            message:"Insira quantos dias ficou com a posse do carro"
        },
        {
            type:'number',
            name:'km',
            message:"Insira quantos quilômetros você percorreu com o carro"
        }]
    )

    let aluguel = (q3.dias*150)

    if(q3.km <= 200){

        aluguel += (q3.km*0.30)
        console.log(`O valor do aluguel a ser pago pelo carro será de R$${Number(aluguel.toFixed(2))}`)

    } else {

        aluguel += (q3.km*0.25)
        console.log(`O valor do aluguel a ser pago pelo carro será de R$${Number(aluguel.toFixed(2))}`)

    } 

}

escolha()
console.log(`=======================================`)