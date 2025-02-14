let computerScore = 0
let humanScore = 0

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

function getHumanChoice(){
    let choice = prompt("rock paper or scissor?: ").toLowerCase

    if (choice === "rock" || choice === "paper" || choice === "scissor"){
        return choice
    } else {
        return "Not a valid option!"
    }
}

function playRound(humanChoice, computerChoice){
     if (humanChoice === "rock"){
        if (computerChoice === "rock"){
            console.log("Draw!")
        } else if (computerChoice === "paper") {
            computerScore += 1
            console.log("Computer wins!")
        } else {
            humanScore += 1
            console.log("You win!")
        }
     } else if (humanChoice === "paper") {
        if (computerChoice === "rock"){
            humanScore += 1
            console.log("You win!")
        } else if (computerChoice === "paper") {
            console.log("Draw!")
        } else {
            computerScore += 1
            console.log("Computer wins!")
        }
     } else {
        if (computerChoice === "rock"){
            computerScore += 1
            console.log("Computer wins!")
        } else if (computerChoice === "paper") {
            humanScore += 1
            console.log("You win!")
        } else {
            console.log("Draw!")
        }
     }
}

let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()

let outcome = playRound(humanChoice, computerChoice)

console.log(`${outcome}\nPlayer: ${humanScore}\nComputer: ${computerScore}\n`)