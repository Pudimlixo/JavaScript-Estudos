//Criar uma matriz de terceira ordem que relacione nome e idades
import inquirer from 'inquirer'

async function gerarMatriz(){
    console.log(`-----Cadastro de dados-----`)
    let nomes = []
    let idades = []

    //Inicializar posições das matrizes

    const qntdDados = await inquirer.prompt([
        {
            type:'input',
            name:'linha',
            message:`Insira quantidade de linhas que deseja que as tabelas tenham:`
        },
        {
            type:'input',
            name:'coluna',
            message:`Insira quantidade de colunas que deseja que as tabelas tenham:`
        }
    ])

    let linha = parseInt(qntdDados.linha)
    let coluna = parseInt(qntdDados.coluna)

    for(let l = 0;l< linha;l++){
        nomes[l] = []
        idades[l] = []
        for(let c = 0;c< coluna;c++){
            nomes[l][c] = ``
            idades[l][c] = ``
        }
    }


    //Cadastro de dados de usuário:

    for(let l = 0;l< linha;l++){
        for(let c = 0;c< coluna;c++){
            const resp = await inquirer.prompt([{
                type:'input',
                name:'nome',
                message:`Digite nome do cadastrado na posição ${l}${c} da tabela`,
            },
            {
                type:'input',
                name:'idade',
                message:`Digite idade do cadastrado na posição ${l}${c} da tabela`,
            }])

            nomes[l][c] = resp.nome
            idades[l][c] = resp.idade

        }
    }

    //Mostrar os dados
    let dados = ``
    let linhas = ``
    for(let l = 0;l< linha;l++){
        for(let c = 0;c< coluna;c++){
            linhas += `Nome: ${nomes[l][c]} idade: ${idades[l][c]} \t`
        }
        dados += linhas + "\n"
    }

    console.log(`-----Pessoas cadastradas-----`)
    console.log(dados)


}

gerarMatriz()