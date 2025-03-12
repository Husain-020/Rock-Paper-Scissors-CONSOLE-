const options = document.querySelector("#options")
const accounts = document.querySelector("#accounts")

const playerScoreDisplay = document.querySelector("#playerScore")
const computerScoreDisplay = document.querySelector("#computerScore")

const playerChoiceImg = document.querySelector("#playerChoiceImg")
const computerChoiceImg = document.querySelector("#computerChoiceImg")

const outcomeDisplay = document.querySelector("#outcome")

const rockImg = "assets/icons/rock.webp"
const paperImg = "assets/icons/paper.jpg"
const scissorImg = "assets/icons/scissors.avif"

let playerScore = 0
let computerScore = 0

function finishGame(winner){
    const buttons = document.querySelectorAll("button")

    buttons.forEach((button) => {
        button.parentElement.removeChild(button)
    })

    const finishMessage = document.createElement("finishMessage")
    finishMessage.textContent = `${winner} won the game!`
    finishMessage.style.fontSize = "50px";

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
        playerChoiceImg.src = rockImg

        if (computerChoice === "rock"){
           return `Draw!`
        } else if (computerChoice === "paper") {
            computerScore += 1
            return "Computer wins!"
        } else {
            playerScore += 1
            return "You win!"
        }
    } else if (humanChoice === "paper") {
        playerChoiceImg.src = paperImg

        if (computerChoice === "rock"){
            playerScore += 1
            return "You win!"
        } else if (computerChoice === "paper") {
            return "Draw!"
        } else {
            computerScore += 1
            return "Computer wins!"
        }
    } else if (humanChoice === "scissor") {
        playerChoiceImg.src = scissorImg

        if (computerChoice === "rock"){
            computerScore += 1
            return "Computer wins!"
        } else if (computerChoice === "paper") {
            playerScore += 1
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
        
        outcomeDisplay.querySelector("h1").textContent = `${outcome}`

        console.log(`Player: ${humanChoice}\nComputer: ${computerChoice}\n"${outcome}"\nPlayer: ${playerScore}\nComputer: ${computerScore}`)
    
        playerScoreDisplay.textContent = `${playerScore}/3`
        computerScoreDisplay.textContent = `${computerScore}/3`
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

// Make accounts div max-height
accounts.style.maxHeight = accounts.offsetHeight + "px"