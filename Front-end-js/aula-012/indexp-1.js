//Prática 1 - Sistema de checagem de voto

import inquirer from 'inquirer'

const resp = await inquirer.prompt(
    {
        type:'input',
        name:'idade',
        message:"Digite sua idade para saber se pode votar ou não:"
    }
)

//Condição aninhada para determinar se usuário pode ou não

if(resp.idade < 16){

    console.log(`Você tem ${resp.idade} anos e não pode votar`)

} else if((resp.idade < 18) || (resp.idade >= 65)){

    console.log(`Você tem ${resp.idade} anos e pode votar, mas não obrigatóriamente`)

} else if (resp.idade >= 18){

    console.log(`Você tem ${resp.idade} anos e deve votar obrigatóriamente`)

}  else if(resp.idade != Number){

    console.log(`A opção digitada não é uma idade, tente novamente`)

}
