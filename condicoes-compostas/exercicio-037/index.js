import inquirer from 'inquirer'

console.log(`===============================================`)
async function reajuste(){
    console.log(`---Reajuste de salário de funcionários---`)
    const resp = await inquirer.prompt([
        {
            type:'number',
            name:'gen',
            message:"Digite gênero do funcionário cadastrado [1] para Masculino [2] para Feminino:"
        },
        {
            type:'number',
            name:'sal',
            message:"Digite salário do(a) funcionário(a) cadastrado(a):"
        },
        {
            type:'number',
            name:'tempo',
            message:"Digite tempo que tal funcionário(a) trabalha na empresa em anos:"
        }
    ]
    )

    const gen = Number(resp.gen)
    const sal = Number(resp.sal)
    const tem = Number(resp.tempo)

    let reajuste = 0

        if(gen > 2){
            throw new Error(`Opção inválida digitada no gênero`)
        } else if(gen == 1 && tem <= 20){
            reajuste = sal+(sal*0.3)
            console.log(`O reajuste de salário do funcionário foi feito e o novo salário será R$${reajuste}`)
        } else if(gen == 1 && tem > 20 && tem <= 30){
            reajuste = sal+(sal*0.13)
            console.log(`O reajuste de salário do funcionário foi feito e o novo salário será R$${reajuste}`)
        } else if(gen == 1 && tem > 30){
            reajuste = sal+(sal*0.25)
            console.log(`O reajuste de salário do funcionário foi feito e o novo salário será R$${reajuste}`)
        } else if(gen == 2 && tem <= 20){
            reajuste = sal+(sal*0.5)
            console.log(`O reajuste de salário da funcionária foi feito e o novo salário será R$${reajuste}`)
        } else if(gen == 2 && tem > 20 && tem <= 30){
            reajuste = sal+(sal*0.12)
            console.log(`O reajuste de salário da funcionária foi feito e o novo salário será R$${reajuste}`)
        } else{
            reajuste = sal+(sal*0.23)
            console.log(`O reajuste de salário da funcionária foi feito e o novo salário será R$${reajuste}`)
        }
    }

reajuste()

console.log(`===============================================`)