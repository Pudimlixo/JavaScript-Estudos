var pais = document.getElementById('nacionality')
var res = document.getElementById('result')



pais.addEventListener('keydown', function(event){
    if((event.key == "Enter") && (pais.value == "Brasil")){
        res.innerText = `Você nasceu em ${pais.value} e é brasileiro`
    } else if((event.key == "Enter") && (pais.value != "Brasil")){
        res.innerText = `Você nasceu em ${pais.value} e é estrangeiro`
    }
})

//Forma de escrever a função para mapear teclas