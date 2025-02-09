/*function acao_botao(){
    var actionB = document.getElementById('area')
    actionB.style.backgroundColor = 'DarkBlue'
    actionB.style.color = 'white'
    actionB.style.width = '110px'
    actionB.style.height = '90px'
    actionB.style.transition = '0.5s'
    actionB.style.fontSize = '16px'
    actionB.innerText = 'Evento DOM ativado'
}

function div_default(){
    var defaultForm = document.querySelector('div#area')
    defaultForm.style.backgroundColor = 'rgba(250, 250, 121, 0.781)'
    defaultForm.style.color = 'black'
    defaultForm.style.width = '100px'
    defaultForm.style.height = '80px'
    defaultForm.innerText = 'Interaja...'
}*/



//É possível criar uma variável global e manipular ela nas funções abaixo, na verdade essa é a forma boa para disparar os eventos somente em JS

var actionB = document.querySelector('div#area')
actionB.addEventListener('mouseenter', acaobotao)
actionB.addEventListener('click', clickB)
var defaultForm = document.querySelector('div#area')
defaultForm.addEventListener('mouseout', div_default)

function acaobotao(){
    actionB.style.backgroundColor = 'DarkBlue'
    actionB.style.color = 'white'
    actionB.style.width = '110px'
    actionB.style.height = '90px'
    actionB.style.transition = '0.5s'
    actionB.style.fontSize = '16px'
    actionB.innerText = 'Evento DOM ativado'
}

function clickB(){
    let paragrafh = document.getElementsByTagName('p')[0]
    actionB.innerHTML = paragrafh.textContent //textContent -> conteúdo de texto dentro daquele elemento
    actionB.style.backgroundColor = 'red'
}

function div_default(){
    defaultForm.style.backgroundColor = 'rgba(250, 250, 121, 0.781)'
    defaultForm.style.color = 'black'
    defaultForm.style.width = '100px'
    defaultForm.style.height = '80px'
    defaultForm.innerText = 'Interaja...'
}