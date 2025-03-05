//Exercício 25 melhorado com classificação dos triângulos de acordo com suas medidas

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


//Condicional que verifica se é possível ou não formar um triângulo
if((Number(resp.l1) < Number(resp.l3)+Number(resp.l2)) && (Number(resp.l2) < Number(resp.l1)+Number(resp.l3))  && (Number(resp.l3) < Number(resp.l1)+Number(resp.l2)) )
{
    console.log(`Com a medida desses lados não é possível formar um triângulo`)
} 
else
{
    console.log(`Com a medida desses lados é possível formar um triângulo`)
}

if((Number(resp.l1) == Number(resp.l2)) && (Number(resp.l2) == Number(resp.l3))){

    console.log("Dado as medidas, o triângulo é EQUILÁTERO por ter seus três lados com medidas iguais")

} else if((Number(resp.l1) == Number(resp.l2)) || (Number(resp.l3) == Number(resp.l1)) || (Number(resp.l2) == Number(resp.l3))){

    console.log("Dado as medidas, o triângulo é ISÓSCELES por ter dois de seus três lados com medidas iguais")

} else{

    console.log("Dado as medidas, o triângulo é ESCALENO por ter seus três lados com medidas diferentes")

}

console.log("=========================================")