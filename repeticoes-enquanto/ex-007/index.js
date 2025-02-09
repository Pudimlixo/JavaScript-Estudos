import inquirer from 'inquirer'

const resp = await inquirer.prompt([
    {
        type: 'number',
        name: 'start',
        message: "Digite por onde deseja começar a contagem:"
    },
    {
        type: 'number',
        name: 'end',
        message: "Digite por onde deseja terminar a contagem:"
    },
    {
        type: 'number',
        name: 'jump',
        message: "Digite o salto da contagem:"
    }
]
)

if (resp.end > resp.start) {
    contagem()
} else {
    contagemreversa()
}

async function contagem() {
        while (resp.start <= resp.end) {
            console.log(resp.start)
            resp.start = resp.start+resp.jump
        }

    console.log(`Acabou!`)
}


async function contagemreversa() {
    while (resp.start > resp.end) {
        console.log(resp.start)
        resp.start = resp.start-resp.jump
    }
}