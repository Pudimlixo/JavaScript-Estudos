import inquirer from 'inquirer'

var questions = [
    {
        type:'input',
        name:'l1',
        message:"Digite tamanho do primeiro segmento de reta (em metros)"
    },
    {
        type:'input',
        name:'l2',
        message:"Digite tamanho do segundo segmento de reta (em metros)"
    },
    {
        type:'input',
        name:'l3',
        message:"Digite tamanho do terceiro segmento de reta (em metros)"
    }
]

console.log("=========================================")
console.log("-----ANÁLISE DE FORMAÇÃO DE TRIÂNGULO-----")
const resp = await inquirer.prompt(questions)

if((Number(resp.l1) < Number(resp.l3)+Number(resp.l2)) && (Number(resp.l2) < Number(resp.l1)+Number(resp.l3))  && (Number(resp.l3) < Number(resp.l1)+Number(resp.l2)) ){
    console.log(`Com a medida desses lados não é possível formar um triângulo`)
} else{
    console.log(`Com a medida desses lados é possível formar um triângulo`)
}

console.log("=========================================")