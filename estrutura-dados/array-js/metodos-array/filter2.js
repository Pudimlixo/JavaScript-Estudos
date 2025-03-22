const produtos = [
    {
        nome:'Salgadinho Doritos',
        preco:7
    },
    {
        nome:'Sabão em pó',
        preco:12
    },
    {
        nome:'Pó de café',
        preco:25
    },
    {
        nome:'Bolacha Trakinas',
        preco:3
    },
    {
        nome:'Azeite de Oliva',
        preco:23.5
    }
]

const produtosAbaixoPreco = produtos.filter(function(precos){
    return precos.preco <= 15
})


//Aparentemente retorna primeiro objeto que satisfazer a condição 
console.log(`-----Produtos encontrados dentro da faixa de preço-----`)
console.log(produtosAbaixoPreco)
console.log(`========================================================`)