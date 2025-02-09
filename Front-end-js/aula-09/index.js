//Exercício 1: Criar um botão que quando clicado, altera estilo do parágrafo acima dele.

//Declaração de variáveis
var b = document.querySelector('button#jsstyle')
var text = document.querySelector('p#text')


//Funções para cada variável

function estilo_botao(){
    b.style.width = '105px'
    b.style.height = '35px'
    b.style.backgroundColor = 'gray'
    b.style.color = 'white'
    b.style.transition = '0.5s'
}

function estilo_botao_padrao(){
    b.style.width = '100px'
    b.style.height = '30px'
    b.style.backgroundColor = 'whitesmoke'
    b.style.color = 'black'
}

function alterar_texto(){
    b.style.backgroundColor = 'black'
    b.style.color = 'white'
    text.textContent = `Olá, mundo!`
    text.style.fontSize = '20px'
    text.style.fontFamily = 'Arial'
}

//Chamada para mudança com EventListener

b.addEventListener('mouseenter', estilo_botao)
b.addEventListener('mouseout', estilo_botao_padrao)
b.addEventListener('click', alterar_texto)
