import inquirer from 'inquirer' //Continuar quando for possível

const cpfs = [
    {
        name:"Vinícius",
        n:1,
    },
    {
        name:"Victor",
        n:2,
    },
    {
        name:"Miguel",
        n:3,
    },
    {
        name:"Julio",
        n:4,
    },
    {
        name:"Robson",
        n:5,
    },
    {
        name:"Marta",
        n:6,
    }
]

console.log(`-----Sistema de controle de cadastro-----`)

async function menu(){
    const menu = await inquirer.prompt({
        tpe:'input',
        name:'op',
        message:"Deseja fazer novo cadastro?[S/N]"
    })

    if(menu.op == "S"){
        verificacao()
    } else if(menu.op == "N"){
        console.log(`Sessão cancelada`)
    } else{
        console.log(`Opção inválida`)
    }
}


async function verificacao(){
    const question = await inquirer.prompt({
        tpe:'input',
        name:'cpf',
        message:"Digite seu cpf"
    })

    const cpfVerificador = cpfs.some(function(x){
        return x.n == question.cpf
    })

    if(cpfVerificador == true){
        console.log(`Acesso negado, seu cpf já está cadastrado`)
    } else{
        console.log(`Acesso permitido...`)
    }
}

menu()