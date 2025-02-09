var num = document.getElementById('num')
var confirmar = document.getElementById('mostrar')
var tabuada = document.getElementsByTagName('li')

function mostrar_tabuada(){
    let n = Number(num.value)
    let c = 0
    while(c < 11){
        tabuada[c].innerText = c+" x "+n+" = "+(n*c)
        c++
    }
}

confirmar.addEventListener('click', mostrar_tabuada)
