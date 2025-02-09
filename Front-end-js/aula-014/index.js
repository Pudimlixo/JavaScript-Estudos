//Teoria: Repetições em JavaScript com teste lógico no ínicio
import inquirer from "inquirer"

const q = await inquirer.prompt(
    {
        type:'input',
        name:'nome',
        message:"Digite seu nome:"
    }
)

let c = 0

while(c < 20){
    console.log(q.nome)
    c++
}