//Problema: Ler duas notas de um aluno e analisar se ele está reprovado, de recuperação ou aprovado
import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'nome',
        message:"Digite nome do aluno a ser cadastrado:"
    },
    {
        type:'input',
        name:'n1',
        message:"Digite a primeira nota do aluno"
    },
    {
        type:'input',
        name:'n2',
        message:"Digite a segunda nota do aluno"
    }
]

console.log("=======================================")
console.log("-----Sistema de notas dos alunos-----")

const resp = await inquirer.prompt(questions)

var media = (Number(resp.n1)+Number(resp.n2))/2

if(media < 5){
    console.log(`A nota do aluno ${resp.nome} é igual a ${media} e o aluno está REPROVADO`)
} 
else if(media > 5 && media < 7 ){
    console.log(`A nota do aluno ${resp.nome} é igual a ${media} e o aluno está de RECUPERAÇÃO`)
} 
else{
    console.log(`A nota do aluno ${resp.nome} é igual a ${media} e o aluno está APROVADO`)
}

console.log("=======================================")
