let seqFibonacci = []
let v = 0
let v2 = 1
let prox = 0

console.log(`-----Array em que seus valores são os primeiros 15 termos da sequência de Fibonacci-----`)

for(let c = 0;c <= 14;c++){
    seqFibonacci[c] = v
    prox = v2+v
    v = v2
    v2 = prox
}

console.log(seqFibonacci)