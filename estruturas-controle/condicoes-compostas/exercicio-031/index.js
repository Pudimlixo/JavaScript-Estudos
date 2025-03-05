//Lógica: Criar jogo de pedra, papel e tesoura de 2 jogadores
//Problema desse exercício: Dividir o objeto do inquirer das perguntas em fluxos diferentes (Já resolvido)

//Parte 1 - iniciar o jogo ou sair

import inquirer from 'inquirer'

//Função que simula o menu do Jokenpo, dando a opção de jogar ou sair
async function menu() {
    console.log("=================================================")
    console.log("-----Jokenpo Game------")
    //constante que cria um objeto do pacote npm que faz uma pergunta no terminal do Node
    const resp = await inquirer.prompt(
        {
            type: 'Number',
            name: 'escolha',
            message: "Digite [1] para iniciar ou [2] para sair"
        }

    )

    //Condicional que verifica resposta do usuário
    if (resp.escolha == 1) {
        return jogo() //Desvio de fluxo para o jogo
    } else if (resp.escolha == 2) {
        return console.log(`Jogo cancelado...`)
    } else {
        return console.log(`Erro, inicie novamente com uma opção válida`)
    }
    console.log("=================================================")
}

//=============================================================================

async function jogo() {
    let resp = await inquirer.prompt({
        type: 'Number',
        name: 'jogada1',
        message: `Jogador 1, escolha sua jogada: [1] - Pedra; [2] - Papel; [3] - Tesoura`
    })

    let resp2 = await inquirer.prompt({
        type: 'Number',
        name: 'jogada2',
        message: `Jogador 2, escolha sua jogada: [1] - Pedra; [2] - Papel; [3] - Tesoura`
    })

    //Condicionais de cada possibilidade de jogo do jogador 1:

    if((resp.jogada1) == (resp2.jogada2)){
        console.log(`EMPATE, ambos escolheram a mesma opção`)
    } else if((resp.jogada1 == 1) && (resp2.jogada2 == 3)){

        console.log(`O jogador 1 venceu escolhendo Pedra que quebra Tesoura`)

    } else if((resp.jogada1 == 2) && (resp2.jogada2 == 1)){

        console.log(`O jogador 1 venceu escolhendo Papel que cobre Pedra`)

    } else if((resp.jogada1 == 3) && (resp2.jogada2 == 2)){

        console.log(`O jogador 1 venceu escolhendo Tesoura que corta Papel`)

    } 
    //Condicionais de cada possibilidade de jogo do jogador 2:
    else if((resp2.jogada2 == 1) && (resp.jogada1 == 3)){

        console.log(`O jogador 2 venceu escolhendo Pedra que quebra Tesoura`)

    } else if((resp2.jogada2 == 2) && (resp.jogada1 == 1)){

        console.log(`O jogador 2 venceu escolhendo Papel que cobre Pedra`)

    } else if((resp2.jogada2 == 2) && (resp.jogada1 == 1)){

        console.log(`O jogador 2 venceu escolhendo Tesoura que corta Papel`)

    } else if((resp2.jogada2 != 1) || (resp2.jogada2 != 2) || (resp2.jogada2 != 3)){

        console.log(`Erro, alguma opção foi inválida`)

    }

    else if((resp.jogada1 != 1) || (resp.jogada1 != 2) || (resp.jogada1 != 3)){

        console.log(`Erro, alguma opção foi inválida`)
        
    }
    
}


//=============================================================================


menu()