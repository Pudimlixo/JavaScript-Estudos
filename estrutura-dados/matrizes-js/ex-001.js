import inquirer from 'inquirer'

async function criacaoMatriz(){
    console.log(`-----Criação de uma tabela própria-----`)

const mat = await inquirer.prompt([{
    type:'input',
    name:'linha',
    message:`Digite a quantidade de linhas que deseja que a matriz tenha:`  
},
{
    type:'input',
    name:'coluna',
    message:`Digite a quantidade de colunas que deseja que a matriz tenha:`  
},
])

const linha = parseInt(mat.linha)
const coluna = parseInt(mat.coluna)
const matrizGerada = []

for(let l = 0;l<linha;l++){
    matrizGerada[l] = []//Inicialização da linha
    for(let c = 0;c<coluna;c++){
        matrizGerada[l][c] = '' 
    }
}

//Atribuição de valores à uma matriz

for(let l = 0;l<linha;l++){
    for(let c = 0;c<coluna;c++){
        const resp = await inquirer.prompt({
            type:'input',
            name:'num',
            message:'Insira valor:'
        })

        matrizGerada[l][c] = resp.num
    }
}

//Exibição de matriz na tela

console.log(matrizGerada)

}

criacaoMatriz()