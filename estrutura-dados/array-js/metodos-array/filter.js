let nomes = ["Gabriel", "Rodrigo", "Mayara", "Leticia", "Assis"]

let nomeEspecifico = nomes.filter(function(name){//O parâmetro passado na função referencia o array que está sendo aplicado o método
    return name == "Gabriel" //Condição imposta para filtrar o nome
})

console.log(`Nome em específico foi encontrado como ${nomeEspecifico}`)