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
        preco:8
    },
    {
        nome:'Azeite de Oliva',
        preco:23.5
    }
]

console.log(`-----Produtos antes da Black Friday-----`)
console.log(produtos)

const oferta = produtos.map(function(items){
    return items.preco-5
})


console.log(`-----Produtos depois da Black Friday-----`)
console.log(oferta)
console.log(`==============================================`)