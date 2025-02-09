var botao = document.getElementById('btn')
var velocidade = document.getElementById('velocidade')
var text = document.getElementById('result')
var text2 = document.getElementById('result2')


function analise(){
    let vel = Number(velocidade.value)
    text.innerText = `A velocidade percorrida pelo usuário cadastrado foi de ${vel}Km/h.`
    if(vel > 60){
        text2.innerHTML = `A velocidade excedeu 60Km/h, você foi MULTADO.`
    }

    text.innerText += ` Não esqueça de usar cinto de segurança!`
}

botao.addEventListener('click', analise)
