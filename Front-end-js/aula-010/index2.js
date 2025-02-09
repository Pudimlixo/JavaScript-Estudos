let num1 = document.querySelector('input#n1')//Adicionar a variável com o objeto "value", faz ela pegar o valor dentro daquela variável
let num2 = document.querySelector('input#n2')
let b = document.getElementsByTagName('button')[0]
let s = document.getElementById('resposta')


function botao_soma(){
    b.style.backgroundColor = 'rgb(236, 236, 105)'
    b.style.transition = '0.3s'
}

function sair_botao(){
    b.style.backgroundColor = 'rgb(235, 235, 155)'
}

function soma(){ //É importante as conversões de tipos serem dentro das funções
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let soma = n1+n2
    s.innerText = `A soma entre os números ${n1} e ${n2} é igual a ${soma}`
}

b.addEventListener('mouseenter', botao_soma)
b.addEventListener('mouseout', sair_botao)
b.addEventListener('click', soma)