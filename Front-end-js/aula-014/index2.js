//Repetição com teste lógico no final
import inquirer from "inquirer"

const q = await inquirer.prompt(
    {
        type:'input',
        name:'nome',
        message:"Digite seu nome:"
    }
)

let c = 0

do{
    console.log(q.nome)
    c++
}while(c < 20)