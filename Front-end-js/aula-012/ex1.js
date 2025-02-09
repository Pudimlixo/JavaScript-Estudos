var idade = document.getElementById('idadeCam')
var btn = document.getElementById('btn')
var msg = document.getElementById('resp')
var estado = document.getElementById('resp2')


function clique(){
    let numIdade = Number(idade.value)//Conversão só é feita uma vez na hora de pegar o valor do input junto
    msg.innerText = `Você tem ${numIdade} ano(s)`
    if(numIdade > 200 || numIdade < 0){//Tratamento de erro ser o primeiro caso para não dar conflito com os outros

        estado.innerText = `[ERRO]Isso não é uma idade válida`
    
    } else if (numIdade < 16){

        estado.innerText = `e NÃO pode votar`

    } else if(numIdade < 18 || numIdade >= 65){

        estado.innerText = `e PODE votar opcionalmente`

    } else if(numIdade >= 18){

        estado.innerText = `e DEVE votar obrigatóriamente`

    } else if(numIdade < 16){

        estado.innerText = `e NÃO pode votar`

    } 
   
}


btn.addEventListener('click', clique)