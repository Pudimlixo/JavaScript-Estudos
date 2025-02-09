//Condição simples: Só tem if, e seu bloco é executado se alguma escolha em si ocorrer, mas caso a condição for falsa, o fluxo segue normalmente.

//Condição tradicional: If e else, executa uma segunda opção se a condição da primeira for falsa.

//Em resumo: Os valores booleanos das condições determinam os fluxos do programa
import inquirer from "inquirer"

console.log(`-----SISTEMA DE MULTA------`)


const resp = await inquirer.prompt([
    {
        type:'input',
        name:'vel',
        message:"Digite velocidade percorrida"
    }
])

 resp.vel = Number(resp.vel)

console.log(`A velocidade que você percorrer é igual a ${resp.vel}Km/h`)


//Condicional para multa
if(resp.vel > 60){
    console.log(`Você foi multado por exceder o limite de velocidade da estrada`)
}

console.log(`Sempre dirija com cinto de segurança!`)