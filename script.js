let computerScore = 0
let humanScore = 0

function finishGame(winner){
    const buttons = document.querySelectorAll("button")

    buttons.forEach((button) => {
        button.parentElement.removeChild(button)
    })

    const finishMessage = document.createElement("finishMessage")
    finishMessage.textContent = `${winner} won the game!`
    finishMessage.style.fontSize = "50px";

    const options = document.querySelector("#options")
    options.appendChild(finishMessage)
}

function getComputerChoice(){
    let choice = Math.random()

    if (choice <= 0.99/3){
        return "rock"
    } else if (choice > 0.99/3 && choice <= (0.99 * 2)/3){
        return "paper"
    } else {
        return "scissor"
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock"){
        if (computerChoice === "rock"){
           return `Draw!`
        } else if (computerChoice === "paper") {
            computerScore += 1
            return "Computer wins!"
        } else {
            humanScore += 1
            return "You win!"
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock"){
            humanScore += 1
            return "You win!"
        } else if (computerChoice === "paper") {
            return "Draw!"
        } else {
            computerScore += 1
            return "Computer wins!"
        }
    } else if (humanChoice === "scissor") {
        if (computerChoice === "rock"){
            computerScore += 1
            return "Computer wins!"
        } else if (computerChoice === "paper") {
            humanScore += 1
            return "You win!"
        } else {
            return "Draw!"
        }
    }
}

function playGame(humanChoice){
    if (humanChoice != "Not a valid option!"){
        let computerChoice = getComputerChoice()
    
        let outcome = playRound(humanChoice, computerChoice)
        
        console.log(`Player: ${humanChoice}\nComputer: ${computerChoice}\n"${outcome}"\nPlayer: ${humanScore}\nComputer: ${computerScore}`)

    } else {
        console.log(humanChoice)
    }
}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id
        playGame(humanChoice)
    })
})