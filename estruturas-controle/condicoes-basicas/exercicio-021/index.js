import inquirer from 'inquirer'
var questions = [
    {
        type:'input',
        name:'ano',
        message:"Digite um ano para saber se ele é bissexto ou não:"
    }
]

console.log("======================================")
const resp = await inquirer.prompt(questions)

if(Number(resp.ano)%4 == 0){
    console.log(`O ano ${resp.ano} é bissexto`)
}else{
    console.log(`O ano ${resp.ano} não é bissexto`)
}

console.log("======================================")