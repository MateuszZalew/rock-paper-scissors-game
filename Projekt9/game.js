const btn = document.querySelector(".start");
const options = document.querySelectorAll(".select img");
const spans = document.querySelectorAll("span");
const rightPanelSpans = document.querySelectorAll(".panel-right span");
let option = "";
let picked = false;
const gameSummary = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const getRandomAnswer = () => {
    const options = ["paper", "rock", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function endGame() {
    if (option != "") document.querySelector(`[data-option="${option}"]`).style.boxShadow = "none";
    option = "";
}

const play = () => {
    spans[0].textContent = option;
    aiOption = getRandomAnswer();
    if (option) spans[1].textContent = aiOption;
    const result = chooseWinner(option, aiOption);
    spans[2].textContent = result;
    if (result == "player") spans[2].style.color = "green";
    else if (result == "computer") spans[2].style.color = "red";
    else spans[2].style.color = "#444";
    switch (result) {
        case "player":
            rightPanelSpans[1].textContent = ++gameSummary.wins;
            rightPanelSpans[0].textContent = ++gameSummary.games;
            break;
        case "computer":
            rightPanelSpans[2].textContent = ++gameSummary.losses;
            rightPanelSpans[0].textContent = ++gameSummary.games;
            break;
        case "draw":
            rightPanelSpans[3].textContent = ++gameSummary.draws;
            rightPanelSpans[0].textContent = ++gameSummary.games;
            break;
        default:
            alert("You must choose one of the options!");
            spans[1].textContent = "";
    }
    endGame();
}

const chooseWinner = (playerChoice, aiChoice) => {
    if (playerChoice == aiChoice) return "draw";
    else if ((playerChoice == "paper" && aiChoice == "rock") || (playerChoice == "rock" && aiChoice == "scissors") || (playerChoice == "scissors" && aiChoice == "paper")) return "player";
    else if (playerChoice == "") return "";
    else return "computer";
}

const addBorder = e => { if (!picked) e.target.style.boxShadow = "0 0 0 3px yellow"; }

const deleteBorder = e => { if (!picked) e.target.style.boxShadow = "none"; }

const pickOption = e => {
    picked = true;
    option = e.target.dataset.option;
    options.forEach(option => option.style.boxShadow = "none");
    e.target.style.boxShadow = "0 0 0 3px yellow";
}

btn.addEventListener('click', play);

options.forEach(option => option.addEventListener('click', pickOption));
options.forEach(option => option.addEventListener('mouseover', addBorder));
options.forEach(option => option.addEventListener('mouseleave', deleteBorder));
