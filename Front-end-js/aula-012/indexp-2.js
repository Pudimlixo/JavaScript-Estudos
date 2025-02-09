//Prática 2 - Ver estado do dia dependendo do horário que o usuário me fornecer

//import inquirer from 'inquirer'

var pegarHora = new Date()//Função que espera ser adicionada uma hora, minuto, segundo, dia, toda informação envolvendo calendário, pode ser pelo lado do servidor ou do cliente
var pegarMin = new Date()

var hAtual = pegarHora.getHours()
var mAtual = pegarMin.getMinutes()

console.log(`-----DIA, TARDE, NOITE------`)

/*const resp = await inquirer.prompt(
    {
        type:'input',
        name:'horas',
        message:"Digite o horário em que está para determinar o estado do dia"
    }
)
*/
//Condicional que determina os fluxos
console.log(`Horário atual = ${hAtual}:${mAtual}`)
if(hAtual < 12){

    console.log(`Está de MANHÃ de acordo com horário digitado`)

} else if(hAtual < 18){

    console.log(`Está de TARDE de acordo com horário digitado`)

} else if(hAtual < 23){

    console.log(`Está de NOITE de acordo com horário digitado`)

} else if((hAtual > 0) && (resp.horas < 6)){

    console.log(`Está de MADRUGADA de acordo com horário digitado`)

} else if(hAtual >= 24){

    console.log(`O horário digitado não existe`)

} else if(hAtual != Number){

    console.log(`O input digitado não é um horário`)

}