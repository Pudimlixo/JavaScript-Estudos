var estadoDia = document.getElementById('mDia')
var pegarMDia = new Date()
var pegarMin = new Date()
var min = pegarMin.getMinutes()
var hora = pegarMDia.getHours()

addEventListener('keydown', function(event){
    if(event.key == "Enter"){
        estadoDia.innerText = `Horário atual: ${hora}:${min}`
    }

    //Condicional que vai verificar momento do dia dependendo do horário
    if(hora > 0 &&  hora < 6){
        estadoDia.innerText += ` - É Madrugada, então Bom noite e VAI DORMIR!`
    } else if(hora >= 6 && hora < 12){
        estadoDia.innerText += ` - É MANHÃ, então Bom dia!`
    } else if(hora >= 12 && hora < 18){
        estadoDia.innerText += ` - É TARDE, então Boa tardeee!`
    } else if(hora >= 18 && hora < 24){
        estadoDia.innerText += ` - É NOITE, então Boa noite!`
    }
})

