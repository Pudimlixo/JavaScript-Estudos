import inquirer from 'inquirer'

console.log(`-----Sequência de Fibonacci personalizada-----`)

async function receberSeq(){
    const seq = await inquirer.prompt({
        type:'number',
        name:'n',
        message:`Digite a quantidade de termos que você quer que apareça da sequência de Fibonacci:`
    })

    seqFibonacci(seq.n)
    
}

function seqFibonacci(x){
    let val = 0
    let val2 = 1
    let prox = 0
    for(let c = 0;c <= x;c++){
        console.log(val)
        prox = val+val2
        val = val2
        val2 = prox
    }

    console.log(`==============================================`)
}


receberSeq()
