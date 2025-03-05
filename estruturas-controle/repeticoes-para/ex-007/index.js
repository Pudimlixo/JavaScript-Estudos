let v = 0
let v2 = 1
let next;

console.log(`Sequência de Fibonacci - Primeiros 10 termos`)

for(let c = 0;c <= 10;c++){
    console.log(v)
    next = v+v2
    v = v2
    v2 = next
}