/*var nome = window.prompt("Digite seu nome")
document.writeln(`Seja muito bem vindo, ${nome.toUpperCase()}.`)
document.writeln(`O nome ${nome} tem ${nome.length} letras.`)
document.writeln(`O nome ${nome} em minúsculo é ${nome.toLowerCase()}`)*/

//É possivel usar tags nessas string (Forma errada de formatar uma string em js, o certo é sempre pelo CSS)

//FORMATAÇÃO DE NÚMEROS
//Delimitar casas decimais de um número real

var num = 230.85
var num2 = 450.90

var s = Number(num)+Number(num2)

//.replace() => método que troca duas strings (Pelo que eu entendi)
//window.alert(`A soma dos números é igual a ${s.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)

//=> Comando que faz mostrar valor monetário de um país