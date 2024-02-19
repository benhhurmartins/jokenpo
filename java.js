const result = document.querySelector('.result')
const humanScore= document.querySelector('#humano-ponto')
const machineScore= document.querySelector ('#maquina-ponto')

let humanScoreNumber= 0
let machineScoreNumber= 0




const playHuman = (humanChoise) => {
    playTheGame(humanChoise, playMachine())
}

const playMachine = () => {
    const choises = ['pedra', 'papel', 'tesoura'];
    const randomNumber = Math.floor(Math.random() * 3);


    return choises[randomNumber]
}
const playTheGame = (human, machine) => {
    console.log('humano:' + human + "maquina" + machine)
    if (human === machine) {
        result.innerHTML = "Empato";
    } else if ( (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
            (human === 'tesoura' && machine === 'papel')
    ){
        humanScoreNumber++
        humanScore.innerHTML= humanScoreNumber
        result.innerHTML = "voce ganhou"
    } else {
machineScoreNumber++
machineScore.innerHTML= machineScoreNumber

        result.innerHTML = "O chat gpt ganhou";
    }
}