var res = document.getElementById('result')
var pegarDia = new Date()
var diaSem = pegarDia.getDay()

addEventListener('keydown', function(event){
    if(event.key == "Enter"){
        switch(diaSem){
            case 0:
                res.innerText = `Hoje é Domingo`
            break
            case 1:
                res.innerText = `Hoje é Segunda feira`
            break
            case 2:
                res.innerText = `Hoje é Terça-feira`
            break
            case 3:
                res.innerText = `Hoje é Quarta-feira`
            break
            case 4:
                res.innerText = `Hoje é Quinta-feira`
            break
            case 5:
                res.innerText = `Hoje é Sexta-feira(Vulgo melhor dia)`
            break
            case 6:
                res.innerText = `Hoje é Sábado`
            break
        }
       
    }
})