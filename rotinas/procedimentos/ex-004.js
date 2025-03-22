import inquirer from 'inquirer'

function gerador(msg, borda, rep){
    console.log(borda)
    for(let c = 0;c<=rep;c++){
    console.log(msg)
    }
    console.log(borda)
}

const options = await inquirer.prompt({
    type:'input',
    name:'borda',
    message:`Digite qual borda deseja escolher [1], [2], [3]:`
})


if(options.borda == 1){

    gerador("JavaScript","*========||========*",3)

} else if(options.borda == 2){

    gerador("JavaScript","<==========|==========>",3)

} else if(options.borda == 3){

    gerador("JavaScript","_---------''----------_",3)
    
} else{
    console.log(`Opção de borda inexistente`)
}