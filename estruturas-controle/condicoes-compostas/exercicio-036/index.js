//Programa de vida saudável -> Cada ponto é 5 cents
import inquirer from 'inquirer'

console.log(`=====================================================`)
async function receber(){
    console.log(`-----Programa de saúde pública-----`)
    console.log(`Programa que se baseia em dar pontos por horas para pessoas que se dedicam a atividas físicas, sendo possível trocar tais pontos por dinheiro, cada ponto é equivalente a 5 Centavos`)

    const q1 = await inquirer.prompt(
        {
            type:'number',
            name:'horas',
            message:`Digite quantas horas de atividade física você realizou no mês`
        }
    )

    let pontos = 0

    if(q1.horas <= 10){
        pontos = q1.horas*2
        console.log(`Com base nas horas de exercício: Você fez ${pontos} pontos e fatorou R$${pontos*0.05}`)
    } else if(q1.horas > 10 && q1.horas <= 20){
        pontos = q1.horas*5
        console.log(`Com base nas horas de exercício: Você fez ${pontos} pontos e fatorou R$${pontos*0.05}`)
    } else{
        pontos = q1.horas*5
        console.log(`Com base nas horas de exercício: Você fez ${pontos} pontos e fatorou R$${pontos*0.05}`)
    }

}

receber()

console.log(`=====================================================`)