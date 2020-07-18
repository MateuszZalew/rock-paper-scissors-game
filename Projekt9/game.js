// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const btn = document.querySelector(".start");
let option = "";
let picked = false;
const gameSummary = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0
}


const play = () => {
    let result = "";
    const options = ["papier", "kamień", "nożyce"];
    aiOption = options[Math.floor(Math.random() * 3)];
    document.querySelectorAll("span")[0].textContent = option;
    if (option) document.querySelectorAll("span")[1].textContent = aiOption;
    result = chooseWinner(option, aiOption);
    document.querySelectorAll("span")[2].textContent = result;
    if (result == "gracz") document.querySelectorAll("span")[2].style.color = "green";
    else if (result == "komputer") document.querySelectorAll("span")[2].style.color = "red";
    else document.querySelectorAll("span")[2].style.color = "#444";
    switch (result) {
        case "gracz":
            document.querySelector(".panel-right").querySelectorAll("span")[1].textContent = ++gameSummary.wins;
            document.querySelector(".panel-right").querySelectorAll("span")[0].textContent = ++gameSummary.games;
            break;
        case "komputer":
            document.querySelector(".panel-right").querySelectorAll("span")[2].textContent = ++gameSummary.losses;
            document.querySelector(".panel-right").querySelectorAll("span")[0].textContent = ++gameSummary.games;
            break;
        case "remis":
            document.querySelector(".panel-right").querySelectorAll("span")[3].textContent = ++gameSummary.draws;
            document.querySelector(".panel-right").querySelectorAll("span")[0].textContent = ++gameSummary.games;
            break;
        default:
            alert("Musisz wybrać jedną z opcji!");
    }

}

const chooseWinner = (playerChoice, aiChoice) => {
    if (playerChoice == "papier") {
        if (aiChoice == "papier") return "remis";
        else if (aiChoice == "kamień") return "gracz";
        else return "komputer";
    } else if (playerChoice == "kamień") {
        if (aiChoice == "papier") return "komputer";
        else if (aiChoice == "kamień") return "remis";
        else return "gracz";
    } else if (playerChoice == "nożyce") {
        if (aiChoice == "papier") return "gracz";
        else if (aiChoice == "kamień") return "komputer";
        else return "remis";
    } else {
        return null;
    }
}

const addBorder = e => { if (!picked) e.target.style.border = "3px solid cyan"; }

const deleteBorder = e => { if (!picked) e.target.style.border = "none"; }

const pickOption = (e) => {
    picked = true;
    e.target.style.border = "3px solid cyan";
    switch (e.target) {
        case first:
            option = "papier";
            second.style.border = "none";
            third.style.border = "none";
            break;
        case second:
            option = "kamień";
            first.style.border = "none";
            third.style.border = "none";
            break;
        case third:
            option = "nożyce";
            first.style.border = "none";
            second.style.border = "none";
            break;
    }
}

btn.addEventListener('click', play);

first.addEventListener("mouseover", addBorder);
second.addEventListener("mouseover", addBorder);
third.addEventListener("mouseover", addBorder);

first.addEventListener('click', pickOption);
second.addEventListener('click', pickOption);
third.addEventListener('click', pickOption);

first.addEventListener('mouseleave', deleteBorder);
second.addEventListener("mouseleave", deleteBorder);
third.addEventListener("mouseleave", deleteBorder);