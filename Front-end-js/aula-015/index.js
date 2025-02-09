//Laço de repetição com seus parâmetros em uma só linha (For)
import inquirer from "inquirer"

const q = await inquirer.prompt(
    {
        type:'input',
        name:'nome',
        message:"Digite seu nome:"
    }
)

for(let c = 0; c < 20; c++){
    console.log(q.nome)
}