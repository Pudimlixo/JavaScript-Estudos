 //Chamada de elementos HTML e ano do sistema
var pegarAno = new Date()
var anoAtual = pegarAno.getFullYear()
var res = document.getElementById('result')
var botao = document.getElementById('confirm')
var sext = document.getElementsByName('textsex')
var anonasc = document.getElementById('ano')
var gen = ''
var imagem = document.createElement('img')
imagem.setAttribute('id','foto')

function verificar(){
    //Verificação condicional para tratamento de erro
    let idade = anoAtual-(Number(anonasc.value))
    imagem.style.width = '250px'
    imagem.style.height = '280px'
    imagem.style.margin = '5px'
    imagem.style.borderRadius = '50%'
    imagem.style.borderStyle = 'groove'
    imagem.style.textAlign = 'center'
    if(anonasc.value == 0 || anonasc.value > anoAtual){
        window.alert("[ERRO], Verifique os dados e tente novamente")
    } else{ //Condições encadeadas para pegar informações cadastradas
        if(sext[0].checked){
            gen = "Homem"
            if(idade > 0 && idade <= 18){
                //Criança
                imagem.setAttribute('src','imagens/img-menino-crianca.png')
            } else if(idade > 18 && idade <= 50){
                //Adulto
                imagem.setAttribute('src','imagens/img-homem-adulto.png')
            } else{
                //Idoso
                imagem.setAttribute('src','imagens/img-homem-velho.png')
            }
        }

        else if(sext[1].checked){
            gen = "Mulher"
            if(idade > 0 && idade <= 18){
                //Criança
                imagem.setAttribute('src','imagens/img-menina-crianca.png')
            } else if(idade > 18 && idade <= 50){
                //Adulta
                imagem.setAttribute('src','imagens/img-mulher-adulta.png')
            } else{
                //Idosa
                imagem.setAttribute('src','imagens/img-mulher-velha.png')
            }
        }
    }

    res.innerText = `Você é um(a) ${gen} de ${idade} anos`
    res.appendChild(imagem)
}


botao.addEventListener('click', verificar)