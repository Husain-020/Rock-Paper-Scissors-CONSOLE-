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
    let choice = prompt("rock paper or scissor?: ")

    if (choice === "rock" || choice === "paper" || choice === "scissor"){
        return choice
    } else {
        return "Not a valid option!"
    }
}

console.log(getHumanChoice())