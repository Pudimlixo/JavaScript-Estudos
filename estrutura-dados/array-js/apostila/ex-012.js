import inquirer from 'inquirer'

let notas = []
let mediaNotas = 0
let qntdAlunosAcimaMedia = 0
let maiorNota = 0

console.log(`-----Analisador de notas dos alunos-----`)

for (let c = 0; c <= 9; c++) {
    const resp = await inquirer.prompt({
        type: 'input',
        name: 'nota',
        message: `Cadastre a nota do ${c + 1}° aluno:`
    })

    resp.nota = parseFloat(resp.nota)

    notas.push(resp.nota)
    mediaNotas += resp.nota

    maiorNota = Math.max(...notas)
}

console.log(`Média de nota da turma: ${mediaNotas / notas.length}`)

for (let c = 0; c <= notas.length - 1; c++) {
    if (notas[c] > mediaNotas/notas.length) {
        qntdAlunosAcimaMedia++
    }
}

console.log(`Quantidade de alunos acima da média: ${qntdAlunosAcimaMedia}`)
console.log(`Maior nota: ${maiorNota}`)
console.log(`Posição ou posições que maior/maiores notas aparecem:`)

for (let c = 0; c <= notas.length - 1; c++) {
    if (notas[c] == maiorNota) {
        console.log(c)
    }
}

console.log(`=======================================`)