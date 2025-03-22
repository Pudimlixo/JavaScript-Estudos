//Criar uma matriz de segunda ordem
import inquirer from 'inquirer'

async function gerarMatriz(){
    console.log(`-----Gerando matriz de segunda ordem que guarde uma lista de nomes-----`)

    let nomes = []

    const atMat = await inquirer.prompt([
        {
            type:'input',
            name:'linha',
            message:'Insira quantidade de linhas que deseja que a matriz tenha:'
        },
        {
            type:'input',
            name:'coluna',
            message:'Insira quantidade de colunas que deseja que a matriz tenha:'
        }
    ])

    const linha = parseInt(atMat.linha)
    const coluna = parseInt(atMat.coluna)

    for(let l = 0;l < linha;l++){
        nomes[l] = []
        for(let j = 0;j < coluna;j++){
            nomes[l][j] = ` `
        }
    }

    for(let l = 0;l < linha;l++){
        for(let j = 0;j < coluna;j++){
            let valMat = await inquirer.prompt({
                type:'input',
                name:'num',
                message:`Insira o valor da posição ${l}${j} da lista:`
            })

            nomes[l][j] = valMat.num
        }
    }

    let tabelaNomes = ``

    for(let l = 0;l < linha;l++){
        let linhasNomes = ``
        for(let j = 0;j < coluna;j++){
            linhasNomes += nomes[l][j] +  "\t"
        }

        tabelaNomes += linhasNomes + "\n"
    }

    console.log(tabelaNomes)
}

gerarMatriz()