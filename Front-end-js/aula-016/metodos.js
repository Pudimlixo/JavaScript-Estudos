let nomes = ['Gabriel', 'Enzo', 'Fernando', 'João'] //Declaração de array com nomes

console.log(`=========================================================`)
console.log(`-----Teste do método .push()-----`)
console.log(nomes)

nomes.push('Bernardo') //adição de novo nome ao último elemento da lista

console.log(nomes)
console.log(`-----Teste de atributo length-----`)//Atributo que analisa quantas posições tem no array
let idades = [34, 59, 57, 30, 18, 27]
console.log(idades)
console.log(`A lista acima tem ${idades.length} posições`)

console.log(`-----Teste de método .sort()-----`)//Método que ordena os valores numéricos dos vetores - Por algum motivo ele só ele o primeiro algarismo(?)
let notas = [8, 5, 4, 1, 60, 36]
console.log(notas)
notas.sort(function(a, b){ //Função de comparação para tratar os elementos do array como números
    return a-b
})

console.log(notas)
console.log(`-----Forma de demonstrar o vetor com loop-----`)
let numeros = [3, 5, 6, 0, 4, 2]
for(let c = 0; c < numeros.length; c++){
    console.log(numeros[c])
}
console.log(`=============================================`)
console.log(`-----Feito com percurso simples-----`)
//Formatação mais simples de um percurso por vetores
for(let c in numeros){
    console.log(numeros[c])
}
console.log(`-----Uso do método .indexOf para achar um valor específico em um vetor-----`)
let nomes2 = ['Vini', 'Mari', 'Julia', 'Melquisedeque', 'Rogério']
console.log(nomes2)
let ju = nomes2.indexOf('Julia')
console.log(`O nome requisitado (${nomes2[2]}) está na posição ${ju}`)

console.log(`=========================================================`)



