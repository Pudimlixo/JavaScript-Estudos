var nome = document.getElementById('nameUser')
var result = document.getElementById('nameResult')



nome.addEventListener('keydown', function(event){ //Usar parâmetro key para determinar evento, junto com "keydown" para mapear tecla pressionada
    if(event.key === "Enter"){
        const nomeCompleto = nome.value //Constante que define o nome completo digitado dentro do input
        const separacao = nomeCompleto.split(' ')//Indica a separação do array, que é um espaço
        const primeiroNome = separacao[0]
        const ultimoNome = separacao[1]
        result.innerText = `Seu nome é igual a ${primeiroNome}`
        result.innerText += ` e seu sobrenome é igual a ${ultimoNome}`
    }
})


//O objeto value serve para pegar valores digitados pelo usuário dentro do elemento
