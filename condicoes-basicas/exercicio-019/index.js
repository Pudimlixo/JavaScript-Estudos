import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'nomeAluno',
        message:"Digite nome do aluno cadastrado"
    },
    {
        type:'input',
        name:'nota1',
        message:"Digite primeira nota do aluno"
    }, 
    {
        type:'input',
        name:'nota2',
        message:"Digite segunda nota do aluno"
    }
]

console.log("=======================================")
console.log("-----Sistema de notas-----")
const resp = await inquirer.prompt(questions)

let media = (Number(resp.nota1)+Number(resp.nota2))/2

console.log("A nota final do aluno "+resp.nomeAluno+" foi igual a "+media)

if (media < 7){
    console.log("APROVEITAMENTO RUIM")
} else{
    console.log("APROVEITAMENTO BOM")
}

console.log("=======================================")