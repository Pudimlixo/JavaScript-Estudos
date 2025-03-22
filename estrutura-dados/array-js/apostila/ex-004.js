let numeros = []
let element;

console.log(`-----Array em que seus valores dependem da condição imposta no percurso-----`)

for(let c = 0;c <= 9;c++){
    if(c % 2 == 0){
        numeros[c] = 5
    } else{
        numeros[c] = 3
    }
}

console.log(numeros)