//Exercício com condição switch
//Prática 3 - Relacionar índices do dia da semana do sistema do PC com seus respectivos nomes

var pegarData = new Date()
var diaSem = pegarData.getDay() //Função que pega índice de dia da semana no sistema

diaSem = 0

switch(diaSem){
    case 0:
        console.log(`Domingo`)
    break
    case 1:
        console.log(`Segunda-feita`)
    break
    case 2:
        console.log(`Terça-feira`)
    break
    case 3:
        console.log(`Quarta-feira`)
    break
    case 4:
        console.log(`Quinta-feira`)
    break
    case 5:
        console.log(`Sexta-feira`)
    break
    case 6:
        console.log(`Sábado`)
    break
    default:
        console.log(`ERRO, o índice inserido não é um dia da semana`)
}