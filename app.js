let userScore = 0,
    compScore = 0,
    userScore_span = document.getElementById("user-score"),
    compScore_span = document.getElementById("comp-score"),
    scoreBoard_div = document.querySelector(".result"),
    result_div = document.querySelector(".result > p"),
    rock_div = document.getElementById("r"),
    paper_div = document.getElementById("p"),
    scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    switch(letter) {
        case "r":
            return "Rock"
            break;
        case "p":
            return "Paper"
            break;
        default: 
            return "Scissors"
            break;
    }
}

function win(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)}. You win! 👏🏼`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow") , 300);
}
function lose(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(userChoice)} loses ${convertToWord(compChoice)}. You loses! 🍼`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow") , 300);
}
function draw(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToWord(userChoice)} draw ${convertToWord(compChoice)}. It is a DRAW ⚔️`;
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow") , 300);
}

function game(userChoice) {
    const ComputerChoice = getComputerChoice();
    switch (userChoice+ ComputerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, ComputerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, ComputerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, ComputerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click',() => game("r"));
    paper_div.addEventListener('click',() => game("p"));
    scissors_div.addEventListener('click',() => game("s"));
}

main()