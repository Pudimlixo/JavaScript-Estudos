import inquirer from 'inquirer'

console.log(`-----Verificador de qual número é maior-----`)

let numeros = []

const resp = await inquirer.prompt([
    {
        type:'number',
        name:'n1',
        message:`Insira o primeiro número`
    },
    {
        type:'number',
        name:'n2',
        message:`Insira o segundop número`
    },
    {
        type:'number',
        name:'n3',
        message:`Insira o terceiro número`
    }
])

numeros.push(resp.n1, resp.n2, resp.n3)

function maior(a, b, c){
    if(a > b && a > c){
        console.log(`O número ${a} é o maior inserido`)
    } else if(b > c && b > a){
        console.log(`O número ${b} é o maior inserido`)
    } else if(c > a && c > b){
        console.log(`O número ${c} é o maior inserido`)
    } else{
        console.log(`Os números digitados são iguais`)
    }
}

maior(resp.n1,resp.n2,resp.n3)