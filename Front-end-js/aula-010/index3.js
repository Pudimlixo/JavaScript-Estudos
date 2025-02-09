var resp = window.prompt("Deseja ir para outra página?[sim] ou [não]")


//Estrutura condicional
if (resp == "sim"){
    window.location = 'exercicio-03-2.html'
} else if (resp == "não"){
    window.document.writeln("Fluxo cancelado")
} else{
    window.alert(`Opção inválida`)
}