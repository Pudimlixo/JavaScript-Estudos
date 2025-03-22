//Como usar parâmetro como repetição?
function gerador(msg, rep){
    console.log(`<=========|=========>`)
    for(let c = 0; c <= rep; c++){
        console.log(msg)}
    console.log(`<=========|=========>`)
}


gerador("Mensagem repetida", 4) //Todo parâmetro precisa ser passado