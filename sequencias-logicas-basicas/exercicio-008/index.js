import inquirer from 'inquirer';

var questions = [
    {
        type:'input',
        name:'distancia',
        message:"Digite uma distância (em metros) para ver sua equivalência em outras medidas:"
    }
]

console.log("---------------MEDIDA DE DISTÂNCIA EM TODAS SUAS UNIDADES--------------")

const resp = await inquirer.prompt(questions)

console.log(`Distância cadastrada em km: ${Number(resp.distancia)/1000}`)
console.log(`Distância cadastrada em hm: ${Number(resp.distancia)/100}`);
console.log(`Distância cadastrada em dam: ${Number(resp.distancia)/10}`);
console.log(`Distância cadastrada em dm: ${Number(resp.distancia)*10}`);
console.log(`Distância cadastrada em cm: ${Number(resp.distancia) * 100}`);
console.log(`Distância cadastrada em mm: ${Number(resp.distancia)*1000}`);

console.log("-----------------------------------------------------------------------")

