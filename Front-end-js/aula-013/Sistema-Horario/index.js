//Pegar elemento HTML por um método
var resultHora = document.getElementById(`hora`)
var tDestaque = document.getElementById('t-principal')
var img = document.getElementById('imagem-estado')

//Pegar horas e minutos do sistema com funções prontas para isso
var pegarHora = new Date()
var pegarMIn = new Date()
var horaAtual = pegarHora.getHours()
var minAtual = pegarMIn.getMinutes()

//Constante que aciona a função que será disparada
const respEvent = new Event(hora_(), estilo())

//Função das mudanças que vai ter com a ação do evento
function hora_(){
    resultHora.innerText = `Neste momento, são exatamente ${horaAtual}:${minAtual} horas.`

    if((horaAtual > 0  &&  horaAtual < 6) || (horaAtual >= 18 && horaAtual < 24)){
        tDestaque.style.color = 'white'
        img.src = 'imagens/img-noite.jpeg'
        document.body.style.backgroundColor = '#46466e'
        resultHora.innerText += ` Boa noite!`

    } else if(horaAtual >= 6  &&  horaAtual < 12){
        tDestaque.style.color = '#04346b'
        img.src = 'imagens/img-dia.jpeg'
        document.body.style.backgroundColor = '#a1d8e3'
        resultHora.innerText += ` Bom dia!`

    } else if(horaAtual >= 12  &&  horaAtual < 18){
        tDestaque.style.color = '#ab6c07'
        img.src = 'imagens/img-tarde.jpg'
        document.body.style.backgroundColor = '#f7c37e'
        resultHora.innerText += ` Boa tarde!`

    }
}







